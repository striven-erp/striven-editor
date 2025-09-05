import './striveneditor.css';
import {
    EXTENSIONS,
    FONTPACK,
    OPTIONGROUPS,
    DEFAULTOPTIONS,
    ACTIVEOPTIONCOLOR,
    FORECOLORICON,
    HILITECOLORICON,
    FONTNAMES,
    FONTSIZES,
    COLLAPSEICON,
    EXPANDICON,
    DESIGNICON,
    UPLOADICON
} from './defaults.js';

// Helpers
import { createSVG, denormalizeCamel, blowUpElement, getImageDimensions, getImageDataURL, computeImageDimensions, createImageElement } from './utils';

// Polyfills
import ResizeObserver from 'resize-observer-polyfill';

// Plugins
import linkify from 'linkifyjs/element';

// Pickr
//import './classic.min.css';
//import Pickr from './pickr.min.js';
import '@simonwep/pickr/dist/themes/classic.min.css'; // 'classic' theme
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';

// Formatting
import js_beautify from 'js-beautify';

/* Represents an instance of the Striven Editor */
export default class StrivenEditor {
    /**
     * Bind onchange handler to contenteditable element
     * @param {HTMLElement} element to bind onchange to
     */
    _bindContenteditableOnChange(el) {
        const se = this;

        el.addEventListener('focus', function () {
            if (el.data_orig === undefined) {
                el.data_orig = el.innerHTML;
            }
            //reset toolbarclick
            se.toolbarClick = false;
        });

        el.addEventListener('blur', function () {
            const menus = se.editor.getElementsByClassName('se-popup-open:not(.se-toolbar-group)');
            const inputs = se.editor.getElementsByTagName('input');
            const colorPicker = se.editor.querySelectorAll('.pcr-app.visible');
            const actives = [...menus, ...colorPicker, ...inputs, se.body, se.toolbar, se.editor];
            if (
                el.innerHTML != el.data_orig &&
                !se.toolbarClick &&
                !actives.includes(document.activeElement) &&
                !menus.length &&
                !colorPicker.length
            ) {
                se.createLinks();
                if (se.options.change) {
                    se.options.change(se.getContent());
                }
                delete el.data_orig;
            }
        });
    }

    /**
     * Instantiate the StrivenEditor
     * @param {HTMLElement} el The element to initialize StrivenEditor on
     * @param {Object} options StrivenEditor options to initialize the editor with
     */
    constructor(el, options) {
        const se = this;

        // Webpack inserts the package.json version
        se['_version'] = __VERSION__;

        // Establish the browser context
        se.establishBrowser();

        // Initialize a range instance for the editor
        se.range = new Range();

        // Initialize a file array for file upload
        se.files = [];

        // Default Option Groups with SVG Data
        se.optionGroups = OPTIONGROUPS;

        // Gets whether an image is being uploaded when pasting or inserting an image
        se._isImageUploading = false;

        // Initialize Options
        if (options) {
            // Set options property
            se.options = options;

            // Font Pack for font-awesome (not being used)
            options.fontPack || (se.options.fontPack = FONTPACK);

            // Allowed File Extensions
            options.extensions || (se.options.extensions = EXTENSIONS);

            // Enabled Toolbar options
            options.toolbarOptions || (se.options.toolbarOptions = DEFAULTOPTIONS);

            // Fill color for active options
            options.activeOptionColor || (se.options.activeOptionColor = ACTIVEOPTIONCOLOR);

            // Default fonts names
            options.fontNames || (se.options.fontNames = FONTNAMES);

            // Allow File Upload
            options.fileUpload !== false && (se.options.fileUpload = true);

            // Configure Options with Minimal Enabled
            if (options.toolbarOptions && options.minimal) {
                // Get custom options from toolbarOptions
                const customs = options.toolbarOptions.filter((opt) => typeof opt === 'object');

                // Set toolbar options for minimal configuration
                se.options.toolbarOptions = ['bold', 'italic', 'underline', 'insertUnorderedList', 'attachment', 'link', 'image', ...customs];

                //disallow tabbing
                se.options.canTab = false;
            }
        } else {
            // Set default options
            se.options = {
                fontPack: FONTPACK,
                extensions: EXTENSIONS,
                toolbarOptions: DEFAULTOPTIONS,
                activeOptionColor: ACTIVEOPTIONCOLOR,
                fontNames: FONTNAMES,
                fileUpload: true,
                canTab: false
            };
        }

        // Initialize the editor
        se.initEditor(el); // Core Editor Initialization
        se.initResponsive(); // Editor Reponsive Logic
        se.initOverflow(); // Overflow Content Logic
        se.overflow(); // Trigger overflow login on init
        se.getIsImageUploading = () => se._isImageUploading;

        // DOM Access to the Editor Instance
        el.StrivenEditor = () => se;

        // Bind handler functions to scope
        se.bound_popupEscapeHandler = se.popupEscapeHandler.bind(se);
    }

    /**
     * Initiliaze the StrivenEditor on the passed element.
     * @param {HTMLElement} el
     */
    initEditor(el) {
        const se = this;

        se.editor = el;
        se.toolbar = se.initToolbar();
        se.body = se.initBody();
        se.linkMenu = se.initLinkMenu();
        se.imageMenu = se.initImageMenu();
        se.tableMenu = se.initTableMenu();
        se.metaDataSection = se.options.metaUrl ? se.initMetaDataSection() : null;
        se.filesSection = se.options.fileUpload ? se.initFilesSection() : null;

        // Add Striven Editor Class
        se.editor.classList.add('striven-editor');

        // Stop events from bubbling up the DOM
        se.editor.onkeypress = (e) => e.stopPropagation();

        // Initialze with the value property in the options
        se.setContent(se.options.value || '');

        window.addEventListener('click', () => {
            if (!se.editor.contains(document.activeElement)) {
                se.closeAllMenus();
            }
        });

        // Remove all link option popups on escape
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                [...se.body.querySelectorAll('.se-link-options')].forEach((o) => o.remove());

                [...se.body.querySelectorAll('.se-image-options')].forEach((o) => o.remove());
            }
        });

        // Toolbar Hide
        if (se.options.toolbarHide) {
            // Hide the toolbar template if there is one
            se.toolbarTemplate && (se.toolbarTemplate.style.display = 'none');

            // Hide the toolbar options
            se.toolbarOptionsGroup.style.display = 'none';

            // Add the close class
            se.toolbar.classList.add('se-toolbar-close');

            // Bind the focus event to reopen the toolbar
            const bodyFocus = se.body.onfocus;
            se.body.onfocus = () => {
                se.overflow();
                se.openToolbar();

                bodyFocus && bodyFocus();
            };

            // Bind the blur event close the toolbar
            const bodyBlur = se.body.onblur;
            se.body.onblur = () => {
                bodyBlur && bodyBlur();
                se.overflow();

                // Do not close the toolbar is editor is active
                setTimeout(() => {
                    if (
                        se.linkMenu.dataset.active !== 'true' &&
                        se.imageMenu.dataset.active !== 'true' &&
                        se.tableMenu.dataset.active !== 'true' &&
                        !se.isEditorInFocus()
                    ) {
                        se.closeToolbar();
                    }
                }, 200);
            };
        } else {
            se.toolbar.style.boxShadow = '#ddd -1px 2px 3px 0px';
            se.toolbar.style.height = 'fit-content';
        }

        // Toolbar Options
        se.toolbarOptions.forEach((optionEl) => {
            // Execute Toolbar Commands
            const optionElClick = optionEl.onclick;

            // Bind the toolbar commands click hander
            optionEl.onclick = (e) => {
                if (!se.browser.isSafari()) {
                    se.range = se.getRange();
                }

                // Get the document execute command
                const command = optionEl.id.split('-').pop();

                // Command Logic
                switch (command) {
                    case 'bold':
                    case 'underline':
                    case 'italic':
                    case 'strikethrough':
                        // If active, deactive the command
                        if (optionEl.classList.contains('se-toolbar-option-active')) {
                            optionEl.classList.remove('se-toolbar-option-active');

                            // Save the range
                            se.setRange();

                            // Focus back into the body
                            se.body.focus();

                            // If the command is active, deactivate the command
                            document.queryCommandState(command) && se.executeCommand(command);
                        } else {
                            // Set the command active (body on focus will execute the command)
                            optionEl.classList.add('se-toolbar-option-active');

                            // Save the range
                            se.setRange();

                            // Focus back into the body
                            se.body.focus();
                        }
                        break;
                    case 'removeFormat':
                        se.executeCommand(command);

                        // Deactivate all toolbar options
                        se.toolbarOptions.forEach((o) => o.classList.remove('se-toolbar-option-active'));

                        break;
                    case 'indent':
                        setTimeout(() => se.setRange(se.range), 0);
                    default:
                        se.body.focus();
                        se.executeCommand(command);
                        break;
                }

                optionElClick && optionElClick();
            };
        });

        // Add dividers
        function constructDivider() {
            const divider = document.createElement('div');
            divider.classList.add('se-divider-section');

            const bar = document.createElement('div');
            bar.classList.add('se-divider-bar');

            divider.append(bar);
            return divider;
        }

        const areas = [...se.toolbarGroups, ...se.toolbar.querySelectorAll('.se-toolbar-selection')];
        areas.forEach((a) => {
            if (a.querySelector('.se-toolbar-option')) {
                a.after(constructDivider());
            }
        });

        // Construct editor elements
        se.toolbar && se.editor.appendChild(se.toolbar);
        se.body && se.editor.appendChild(se.body);
        se.linkMenu && se.editor.appendChild(se.linkMenu);
        se.imageMenu && se.editor.appendChild(se.imageMenu);
        se.tableMenu && se.editor.appendChild(se.tableMenu);
        se.metaDataSection && se.editor.appendChild(se.metaDataSection);
        se.filesSection && se.editor.appendChild(se.filesSection);

        // Reposition Toolbar
        if (se.options.toolbarBottom) {
            se.toolbar.classList.add('se-toolbar-bottom');
            se.toolbar.classList.add('se-toolbar-top');

            se.linkMenu.classList.remove('se-popup-top');
            se.linkMenu.classList.add('se-popup-bottom');

            se.imageMenu.classList.remove('se-popup-top');
            se.imageMenu.classList.add('se-popup-bottom');

            se.tableMenu.classList.remove('se-popup-top');
            se.tableMenu.classList.add('se-popup-bottom');

            se.editor.removeChild(se.toolbar);
            se.editor.append(se.toolbar);
        }

        se.options.init && se.options.init(se);
    }

    /**
     * Open the toolbar for when the toolbarHide option is set to true
     */
    openToolbar() {
        const se = this;

        se.toolbar.classList.remove('se-toolbar-close');
        setTimeout(() => {
            se.toolbarOptionsGroup.style.display = 'flex';
            se.toolbarTemplate && (se.toolbarTemplate.style.display = 'flex');
        }, 200);
    }
    /**
     * Close the toolbar for when the toolbarHide option is set to true
     */
    closeToolbar() {
        const se = this;

        se.closeAllMenus();
        se.toolbarOptionsGroup.style.display = 'none';
        se.toolbarTemplate && (se.toolbarTemplate.style.display = 'none');
        se.toolbar.classList.add('se-toolbar-close');
    }

    /**
     * Initialized the toolbar for StrivenEditor
     * @returns {HTMLElement} The StrivenEditor toolbar
     */
    initToolbar() {
        const se = this;

        const toolbar = document.createElement('div');
        se.toolbarOptionsGroup = document.createElement('div');
        const groups = Object.keys(se.optionGroups);

        toolbar.classList.add('se-toolbar');
        toolbar.classList.add('toolbar-top');

        se.toolbarOptionsGroup.classList.add('se-toolbar-options');

        toolbar.onclick = (ev) => {
            se.body.focus();
        };

        // Append Font Options
        !se.options.minimal && se.initToolbarFontOptions();

        //iterate groups
        groups.forEach((group) => {
            // add menu to toolbarOptions
            const toolbarMenu = document.createElement('div');
            // const toolbarMenuIcon = document.createElement("i");

            toolbarMenu.classList.add('se-toolbar-menu');
            toolbarMenu.id = `menu-${group}`;
            toolbarMenu.setAttribute('data-name', group);

            // toolbarMenuIcon.classList.add(se.options.fontPack);
            // toolbarMenuIcon.classList.add(se.optionGroups[group].menu);

            const arrow = {
                viewBox: '0 0 1792 1792',
                d: 'M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z'
            };

            const svgSpan = se.constructSVG(se.optionGroups[group].menu);
            toolbarMenu.appendChild(svgSpan.getElementsByTagName('svg')[0]);

            if (group !== 'options') {
                const arrowSpan = se.constructSVG(arrow);
                arrowSpan.classList.add('se-arrow-span');
                toolbarMenu.appendChild(arrowSpan);
            }

            se.toolbarOptionsGroup.appendChild(toolbarMenu);

            // add group to toolbarOptions
            const toolbarGroup = document.createElement('div');

            toolbarGroup.classList.add('se-toolbar-group');
            toolbarGroup.id = `group-${group}`;

            // iterate options within group
            se.options.toolbarOptions.forEach((option) => {
                const toolbarOption = se.optionGroups[group].group.filter((group) => group[option])[0];
                if (toolbarOption) {
                    const svgData = toolbarOption[option];
                    const optionSpan = se.constructSVG(svgData);

                    optionSpan.classList.add('se-toolbar-option');
                    optionSpan.id = `toolbar-${option}`;
                    optionSpan.title = denormalizeCamel(option);
                    optionSpan.setAttribute('data-group-name', group);

                    switch (option) {
                        case 'removeFormat':
                            optionSpan.setAttribute('title', 'Clear Format');
                            break;
                        case 'hiliteColor':
                            optionSpan.setAttribute('title', 'Background Color');
                            break;
                        default:
                            optionSpan.setAttribute('title', denormalizeCamel(option));
                            break;
                    }
                    toolbarGroup.appendChild(optionSpan);
                }
            });

            se.toolbarOptionsGroup.appendChild(toolbarGroup);
        });

        toolbar.appendChild(se.toolbarOptionsGroup);

        // Custom toolbar template
        if (se.options.toolbarTemplate) {
            const toolbarTemplate = document.createElement('div');
            toolbarTemplate.id = 'toolbar-template';
            toolbarTemplate.setAttribute('style', 'display: flex');
            toolbarTemplate.appendChild(se.options.toolbarTemplate);
            toolbar.appendChild(toolbarTemplate);

            se.toolbarTemplate = toolbarTemplate;
        }

        se.toolbarOptions = toolbar.querySelectorAll('span');
        se.toolbarGroups = [...toolbar.getElementsByClassName('se-toolbar-group')];
        se.toolbarMenus = [...toolbar.getElementsByClassName('se-toolbar-menu')];

        // Remove menu that has no options enabled
        se.toolbarGroups.forEach((group) => {
            if (group && group.children.length < 1) {
                const groupName = group.id.split('-')[1];
                const menu = se.toolbarMenus.filter((menu) => menu && menu.id.split('-')[1] === groupName)[0];
                menu.remove();
            }
        });

        const miscOptions = toolbar.querySelector('#group-options');
        // toolbar group for custom options
        const customOptions = se.options.toolbarOptions.filter((option) => typeof option === 'object');
        if (customOptions.length > 0) {
            customOptions.forEach((opt) => {
                const { icon, handler, title } = opt;

                if (typeof icon === 'object') {
                    const option = se.constructSVG({ viewBox: icon.viewBox, d: icon.d });
                    option.classList.add('se-toolbar-option');

                    option.onclick = () => handler(option);
                    option.setAttribute('id', `toolbar-${title}`);
                    option.setAttribute('title', denormalizeCamel(title));

                    miscOptions.appendChild(option);
                } else {
                    const option = document.createElement('span');
                    const image = document.createElement('img');
                    image.setAttribute('src', opt.icon);
                    image.setAttribute('alt', 'custom option');

                    option.style.paddingTop = '6px';
                    option.style.paddingBottom = '8px';
                    option.classList.add('se-toolbar-option');

                    option.onclick = () => handler();

                    option.append(image);
                    miscOptions.appendChild(option);
                }
            });
        }

        const removeFormatOption = toolbar.querySelector('#toolbar-removeFormat');

        if (removeFormatOption) {
            removeFormatOption.remove();
            miscOptions.append(removeFormatOption);
        }

        se.toolbarClick = false;
        toolbar.addEventListener('mousedown', () => {
            se.toolbarClick = true;
        });

        toolbar.addEventListener('mouseup', () => {
            se.toolbarClick = false;
        });
        return toolbar;
    }

    /*
     * Initializes the toolbars font options
     */
    initToolbarFontOptions() {
        const se = this;

        function initMenu(name, onOpen) {
            const menu = document.createElement('div');
            menu.setAttribute('id', `${name}-menu`);
            menu.classList.add('se-popup', se.options.toolbarBottom ? 'se-popup-bottom' : 'se-popup-top');
            menu.dataset.active = 'false';

            menu.open = () => {
                se.closeAllMenus();

                se.setMenuOffset(se.toolbar.querySelector(`#toolbar-${name}`), menu);

                menu.classList.add('se-popup-open');

                menu.dataset.active = 'true';
                se.addPopupEscapeHandler();

                onOpen && onOpen(menu);
            };

            menu.close = () => {
                menu.classList.remove('se-popup-open');
                menu.dataset.active = 'false';
                se.removePopupEscapeHandler();
            };

            se.editor.append(menu);
            return menu;
        }

        function initFontNameMenu(select) {
            const menu = initMenu('fontName');

            menu.dataset.init = 'true';
            ['(inherited font)', ...se.options.fontNames].forEach((f) => {
                const fontOption = document.createElement('div');

                fontOption.classList.add('se-toolbar-popup-option');
                fontOption.textContent = f;
                fontOption.style.fontFamily = f;

                const trigger = (e) => {
                    let fontselect = e.target.textContent;
                    select.textContent = fontselect;
                    menu.close();

                    function execute() {
                        if (fontselect === '(inherited font)') {
                            fontselect = getComputedStyle(se.body).fontFamily;
                        }

                        if (se.browser.isEdge() || se.browser.isFirefox()) {
                            document.execCommand('fontName', false, fontselect);
                        } else {
                            document.execCommand('fontName', true, fontselect);
                        }
                    }

                    execute();

                    const refocus = se.body.onfocus;
                    se.body.onfocus = () => {
                        se.setRange(se.range);

                        if (!se.getContent()) {
                            const enabler = () => {
                                setTimeout(() => {
                                    execute();
                                    se.body.removeEventListener('keydown', enabler);
                                });
                            };

                            se.body.addEventListener('keydown', enabler);
                        }

                        setTimeout(() => execute(), 0);

                        if (se.scrollPosition && !se.browser.isEdge()) {
                            se.body.scrollTo(se.scrollPosition.x, se.scrollPosition.y);
                        }
                        se.body.onfocus = refocus;
                    };

                    se.body.focus();
                };

                fontOption.onmousedown = trigger;

                menu.append(fontOption);
            });

            return menu;
        }

        function initFontSizeMenu(select) {
            const menu = initMenu('fontSize');

            const sizes = FONTSIZES;

            ['(inherited size)', ...Object.keys(sizes)].forEach((size) => {
                let s = sizes[size] || '(inherited size)';

                const fontOption = document.createElement('div');

                fontOption.classList.add('se-toolbar-popup-option');
                fontOption.textContent = s;

                function execute() {
                    let execSize = size;

                    if (size === '(inherited size)') {
                        execSize = 3;
                    }

                    if (se.browser.isEdge() || se.browser.isFirefox()) {
                        document.execCommand('fontSize', false, execSize);
                    } else {
                        document.execCommand('fontSize', true, execSize);
                    }
                }

                const trigger = (e) => {
                    const fontsize = e.target.textContent;

                    select.textContent = fontsize;
                    select.dataset.command = size;

                    menu.close();

                    execute();

                    const refocus = se.body.focus;
                    se.body.onfocus = () => {
                        se.setRange(se.range);

                        if (!se.getContent()) {
                            const enabler = () => {
                                setTimeout(() => {
                                    execute();
                                    se.body.removeEventListener('keydown', enabler);
                                }, 0);
                            };

                            se.body.addEventListener('keydown', enabler);
                        }

                        setTimeout(() => execute(), 0);

                        if (se.scrollPosition && !se.browser.isEdge()) {
                            se.body.scrollTo(se.scrollPosition.x, se.scrollPosition.y);
                        }
                        se.body.onfocus = refocus;
                    };

                    se.body.focus();
                };

                fontOption.onmousedown = trigger;

                menu.append(fontOption);
            });

            return menu;
        }

        function initFontFormatMenu() {
            const menu = initMenu('fontFormat');

            const formats = [
                {
                    command: 'H1',
                    option: '<h1 style="margin: 0; color: #000;">Heading 1</h1>'
                },
                {
                    command: 'H2',
                    option: '<h2 style="margin: 0; color: #000;">Heading 2</h2>'
                },
                {
                    command: 'H3',
                    option: '<h3 style="margin: 0; color: #000;">Heading 3</h4>'
                },
                {
                    command: 'H4',
                    option: '<h4 style="margin: 0; color: #000;">Heading 4</h4>'
                },
                {
                    command: 'H5',
                    option: '<h5 style="margin: 0; color: #000;">Heading 5</h5>'
                },
                {
                    command: 'H6',
                    option: '<h6 style="margin: 0; color: #000;">Heading 6</h6>'
                },
                {
                    command: 'P',
                    option: '<p style="margin: 0; color: #000;">Paragraph</p>'
                }
            ];

            formats.forEach((s) => {
                const fontOption = document.createElement('div');

                fontOption.classList.add('se-toolbar-popup-option');
                fontOption.innerHTML = s.option;

                fontOption.onclick = (e) => {
                    menu.close();
                    se.body.focus();
                    se.setRange();

                    if (se.browser.isFirefox() || se.browser.isEdge()) {
                        document.execCommand('removeFormat', false);
                    } else {
                        document.execCommand('removeFormat', true);
                    }

                    se.executeCommand('formatBlock', s.command);
                };

                menu.append(fontOption);
            });

            return menu;
        }

        // Get enabled toolbar options
        const enabledOptions = se.options.toolbarOptions;

        // Enable font name option
        if (enabledOptions.includes('fontName')) {
            // Initialize and append toolbar option
            const fontSelect = document.createElement('div');
            const selectedFont = document.createElement('p');

            // Initialize the popup menu to be length of longest name
            const menu = initFontNameMenu(selectedFont);

            // Toggle the fontselect popup on the select click
            fontSelect.onclick = () => {
                if (!se.browser.isSafari()) {
                    se.range = se.getRange();
                }

                if (menu.dataset.active === 'true') {
                    menu.close();
                } else {
                    menu.open();
                }
            };

            // Set the select to initialize on the first font name
            selectedFont.textContent = '(inherited font)';

            fontSelect.setAttribute('id', 'toolbar-fontName');

            fontSelect.classList.add('se-toolbar-selection');
            selectedFont.classList.add('se-toolbar-option');

            fontSelect.append(selectedFont);
            se.toolbarOptionsGroup.append(fontSelect);
            se.fontName = selectedFont;
        }

        // Enable font size option
        if (enabledOptions.includes('fontSize')) {
            const fontSizeSelect = document.createElement('div');
            const selectedFontSize = document.createElement('p');
            const menu = initFontSizeMenu(selectedFontSize);

            fontSizeSelect.onclick = () => {
                if (!se.browser.isSafari()) {
                    se.range = se.getRange();
                }

                if (menu.dataset.active === 'true') {
                    menu.close();
                } else {
                    menu.open();
                }
            };

            fontSizeSelect.setAttribute('id', 'toolbar-fontSize');
            selectedFontSize.textContent = '(inherited size)';

            fontSizeSelect.classList.add('se-toolbar-selection');
            selectedFontSize.classList.add('se-toolbar-option');

            fontSizeSelect.append(selectedFontSize);
            se.toolbarOptionsGroup.append(fontSizeSelect);
            se.fontSize = selectedFontSize;
        }

        if (enabledOptions.includes('fontFormat')) {
            const fontFormatSelect = document.createElement('div');
            const selectedFontFormat = document.createElement('p');
            const menu = initFontFormatMenu();

            fontFormatSelect.onclick = () => {
                if (!se.browser.isSafari()) {
                    se.range = se.getRange();
                }

                if (menu.dataset.active === 'true') {
                    menu.close();
                } else {
                    menu.open();
                }
            };

            fontFormatSelect.setAttribute('id', 'toolbar-fontFormat');
            selectedFontFormat.textContent = 'Format';

            fontFormatSelect.classList.add('se-toolbar-selection');
            selectedFontFormat.classList.add('se-toolbar-option');

            fontFormatSelect.append(selectedFontFormat);
            se.toolbarOptionsGroup.append(fontFormatSelect);
        }
    }

    /**
     * Initialized the StrivenEditor body
     * @returns {HTMLElement} The StrivenEditor body
     */
    initBody() {
        const se = this;
        const body = document.createElement('div');

        body.classList.add('se-body');
        body.contentEditable = 'true';
        body.style.height = se.editor.style.height;
        body.style.minHeight = se.editor.style.minHeight;
        body.style.maxHeight = se.editor.style.maxHeight;

        se.editor.setAttribute('height', se.editor.style.height);
        se.editor.setAttribute('min-height', se.editor.style.minHeight);
        se.editor.setAttribute('max-height', se.editor.style.maxHeight);

        se.editor.style.height = 'auto';
        se.editor.style.minHeight = 'auto';
        se.editor.style.maxHeight = 'auto';

        se.options.placeholder && (body.dataset.placeholder = se.options.placeholder);

        se._bindContenteditableOnChange(body);

        // Execute this function on mouseup and keyup
        const execRange = () => {
            const current = se.getRange();
            if (current) {
                se.range = current;
            }
        };

        // Paste Handler
        body.onpaste = (e) => {
            // Editor Paste Handler
            if (se.options.onPaste) {
                const content = se.options.onPaste(e);
                if (content) {
                    e.preventDefault();
                    se.executeCommand('insertHTML', content);
                    return true;
                }
            }

            const afterPaste = () => {
                // After the paste
                setTimeout(() => {
                    // Editor After Paste Handler
                    se.options.afterPaste && se.options.afterPaste(e);
                }, 10);

                se.overflow();
            };

            // Paste image logic
            if (e.clipboardData.files && e.clipboardData.files.length > 0 ) {
                e.preventDefault();
                
                se.insertImages(e.clipboardData.files).finally(() => {
                    afterPaste();
                });

                return true;
            }

            // pasting text content
            if (e.clipboardData.items && e.clipboardData.items.length > 0 && e.clipboardData.items[0].type === 'text/plain') {
                let plainText = e.clipboardData.getData('text/plain');

                if (se.validURL(plainText.trim())) {
                    // get meta data
                    if (se.options.metaUrl) {
                        se.getMeta(plainText).then((res) => {
                            const { url, title, image, description } = res;
                            url && title && image && se.createMetaDataElement(url, image, title, description);
                        });
                    }
                }
            }

            let pastedHTML = false;
            if (e.clipboardData.types.includes('text/html')) {
                //get the html
                pastedHTML = e.clipboardData.getData('text/html');
            }

            // Wrap pasted link content for resetting the range
            if (pastedHTML) {
                e.preventDefault();

                let pasteNode = document.createElement('span');
                pasteNode.innerHTML = pastedHTML;

                //cleanup styles
                this.pruneInlineStyles(pasteNode);

                //cleanup css classes
                this.cleanCss(pasteNode);

                //sanitize
                if (se.options.sanitizePaste) {
                    pasteNode = this.scrubHTML(pasteNode);
                }

                pasteNode.setAttribute('class', 'se-pasted-content');
                se.executeCommand('insertHTML', pasteNode.innerHTML);
            }

            afterPaste();
        };

        body.onkeydown = (e) => {
            switch (e.key) {
                case 'Tab':
                    if (se.options.canTab) {
                        e.shiftKey ? se.executeCommand('outdent') : se.executeCommand('indent');
                        e.preventDefault();
                    }
                    break;
                case 'Shift':
                    break;
                case 'Backspace':
                    se.textBuffer && (se.textBuffer = se.textBuffer.substring(0, se.textBuffer.length - 1));
                    break;
                case 'Control':
                    break;

                case 'Semicolon':
                    if (e.shiftKey) {
                        se.textBuffer ? (se.textBuffer += ':') : (se.textBuffer = ':');
                    }
                    break;
                default:
                    se.textBuffer ? (se.textBuffer += e.key) : (se.textBuffer = e.key);
                    break;
            }
        };

        // State of the editor
        const bodyKeyup = body.onkeyup;
        body.onkeyup = (e) => {
            bodyKeyup && bodyKeyup();
            execRange();

            if (e.key) {
                switch (e.key) {
                    case 'Enter':
                        se.options.onEnter && se.options.onEnter(e);
                        break;
                    default:
                        break;
                }
            }

            se.setFontStates();
            se.toolbarState();
        };

        // addEventListener('keyup', (e) => {
        //   const tab = (e.key === 'Tab' || e.keyCode === 9);
        //   if (tab && document.activeElement === se.body) {
        //     if (se.body.textContent.trim() === '') {
        //       const r = se.getRange();

        //       if (r) {
        //         const selNode = document.createElement('span');
        //         selNode.innerHTML = '&nbsp;';
        //         se.body.append(selNode);

        //         r.selectNode(selNode);
        //         r.collapse();
        //       }

        //     } else {
        //       const r = se.getRange();

        //       if (r) {
        //         r.selectNodeContents(se.body);
        //         r.collapse();
        //       }
        //     }
        //   }

        //   if (tab && document.activeElement !== se.body && se.body.textContent.trim() === '') {
        //     se.clearContent();
        //   }
        // });

        const bodyFocus = body.onfocus;
        body.onfocus = (e) => {
            !se.browser.isEdge() && se.setRange();

            window.addEventListener('mouseup', execRange);

            se.editor.classList.add('se-focus');

            if (se.body.textContent.trim() === '') {
                const r = se.getRange();

                if (r) {
                    const selNode = document.createTextNode('');
                    se.body.append(selNode);

                    setTimeout(() => {
                        se.getRange().selectNode(selNode);
                        selNode.remove();
                    }, 0);
                }
            }

            if (se.scrollPosition && !se.browser.isEdge()) {
                body.scrollTo(se.scrollPosition);
            }

            bodyFocus && bodyFocus();
        };

        // Bind state management event
        body.addEventListener('focus', () => {
            // disables all states
            se.options.toolbarOptions.forEach((opt) => {
                if (typeof opt === 'string') {
                    if (document.queryCommandState('insertUnorderedList') && opt === 'insertUnorderedList') {
                        return false;
                    }
                    if (document.queryCommandState('insertOrderedList') && opt === 'insertOrderedList') {
                        return false;
                    }

                    document.queryCommandState(opt) && se.executeCommand(opt);
                }
            });

            // enable only active states
            se.getActiveOptions().forEach((opt) => {
                !document.queryCommandState(opt) && se.executeCommand(opt);
            });
        });

        const bodyBlur = body.onblur;
        body.onblur = (e) => {
            se.editor.classList.remove('se-focus');

            window.removeEventListener('mouseup', execRange);

            se.scrollPosition = {
                y: body.scrollTop,
                x: body.scrollWidth
            };

            se.textBuffer = null;

            se.clearLinksToEdit();
            se.clearImagesToEdit();

            bodyBlur && bodyBlur();
        };

        const bodyClick = body.onclick;
        body.onclick = (event) => {
            se.closeAllMenus();
            se.setFontStates();
            body.textContent && se.toolbarState();

            se.handleImageClick(event.target);

            bodyClick && bodyClick();
        };

        return body;
    }

    /**
     * Intializes the StrivenEditor link menu popup
     * @returns {HTMLElement} The StrivenEditor link menu
     */
    initLinkMenu() {
        const se = this;

        const linkMenu = document.createElement('div');
        const linkMenuHeader = document.createElement('p');
        const linkMenuForm = document.createElement('div');
        const linkMenuButtons = document.createElement('div');
        const linkMenuButton = document.createElement('button');
        const linkMenuCloseButton = document.createElement('button');
        const linkMenuFormLabel = document.createElement('p');
        const linkMenuFormInput = document.createElement('input');
        const linkMenuCheck = document.createElement('input');

        function resetInput() {
            linkMenuFormInput.value = 'http://';
        }

        linkMenu.id = 'link-menu';
        linkMenu.classList.add('se-popup', 'se-popup-top');
        linkMenu.dataset.active = 'false';

        linkMenuForm.classList.add('se-popup-form');

        linkMenuFormLabel.classList.add('se-form-label');
        linkMenuFormLabel.textContent = 'URL';

        linkMenuFormInput.classList.add('se-form-input');
        se.options.useBootstrap && linkMenuFormInput.classList.add('form-control');
        linkMenuFormInput.type = 'text';
        linkMenuFormInput.placeholder = 'Insert a Link';

        resetInput();

        linkMenuButton.type = 'button';
        linkMenuCloseButton.type = 'button';

        linkMenuButtons.classList.add('se-popup-button-container');

        linkMenuButton.classList.add('se-popup-button', 'se-button-primary');
        linkMenuButton.textContent = 'Insert';

        linkMenuCloseButton.classList.add('se-popup-button', 'se-button-secondary');
        linkMenuCloseButton.textContent = 'Close';

        linkMenuButton.onclick = (e) => {
            const linkValue = linkMenuFormInput.value;
            se.body.focus();
            se.setRange();
            if (linkValue) {
                const linkToEdit = se.body.querySelector('.se-link-to-edit');

                if (linkToEdit) {
                    linkToEdit.setAttribute('href', linkValue);
                    linkToEdit.innerText = textRowInput.value || linkValue;
                    linkToEdit.classList.remove('se-link-to-edit');
                    linkToEdit.setAttribute('target', windowRowInput.checked ? '_blank' : '');
                    linkToEdit.setAttribute('contenteditable', true);
                    se.makeLinksClickable([linkToEdit]);
                } else if (!se.body.textContent.trim()) {
                    const linkToCreate = document.createElement('a');
                    linkToCreate.setAttribute('href', linkValue);
                    linkToCreate.innerText = textRowInput.value || linkValue;
                    linkToCreate.setAttribute('contenteditable', true);
                    linkToCreate.setAttribute('target', windowRowInput.checked ? '_blank' : '');
                    se.body.append(linkToCreate);
                    se.makeLinksClickable([linkToCreate]);
                }

                if (se.options.metaUrl && se.validURL(linkValue)) {
                    se.getMeta(linkValue).then((res) => {
                        const { url, image, title, description } = res;
                        url && image && title && se.createMetaDataElement(url, image, title, description);
                    });
                }

                // trigger input event
                let inpEvent = new Event('input', { cancelable: true, bubbles: true });
                se.body.dispatchEvent(inpEvent);

                se.closeLinkMenu();
            } else {
                se.body.focus();
                se.closeLinkMenu();
            }

            resetInput();
        };

        linkMenuCloseButton.onclick = (e) => {
            se.body.focus();
            se.closeLinkMenu();
            resetInput();
        };

        linkMenuHeader.classList.add('se-popup-header');
        linkMenuHeader.innerText = 'Insert Link';

        linkMenu.appendChild(linkMenuHeader);

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);

        const textRow = linkMenuForm.cloneNode(true);
        const textRowLabel = textRow.querySelector('.se-form-label');
        const textRowInput = textRow.querySelector('.se-form-input');

        if (textRowLabel) {
            textRowLabel.innerText = 'Text';
        }

        if (textRowInput) {
            textRowInput.value = '';
            textRowInput.placeholder = 'Text content';
        }

        const windowRow = linkMenuForm.cloneNode(true);
        const windowRowLabel = windowRow.querySelector('.se-form-label');
        const windowRowInput = windowRow.querySelector('.se-form-input');

        if (windowRow) {
            windowRow.setAttribute('style', 'justify-content: flex-end; align-items: center; flex-direction: row-reverse');
        }

        if (windowRowLabel) {
            windowRowLabel.innerText = 'Open in new window';
            windowRowLabel.style.marginLeft = '5px';
        }

        if (windowRowInput) {
            windowRowInput.checked = true;
            windowRowInput.setAttribute('type', 'checkbox');
            windowRowInput.setAttribute('style', 'width: auto');
        }

        linkMenu.appendChild(linkMenuForm);
        linkMenu.appendChild(textRow);
        linkMenu.appendChild(windowRow);

        linkMenuButtons.appendChild(linkMenuButton);
        linkMenuButtons.appendChild(linkMenuCloseButton);

        linkMenu.appendChild(linkMenuButtons);

        [...linkMenu.getElementsByTagName('input')].forEach((inp) => {
            inp.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            };

            inp.onblur = () => {
                setTimeout(() => se.clearLinksToEdit(), 200);
            };
        });

        return linkMenu;
    }

    /**
     * Initializes the StrivenEditor image menu popup
     * @returns {HTMLElement} The StrivenEditor image menu
     */
    initImageMenu() {
        const se = this;

        const imageMenu = document.createElement('div');
        const imageMenuHeader = document.createElement('div');
        // Upload tab button
        const imageMenuUploadTabButton = document.createElement('button');
        imageMenuUploadTabButton.classList.add('se-tab-button', 'se-tab-button-upload', 'tab-button-active');
        imageMenuUploadTabButton.type = 'button';
        imageMenuUploadTabButton.tabIndex = 1;
        // Link tab button
        const imageMenuLinkTabButton = document.createElement('button');
        imageMenuLinkTabButton.classList.add('se-tab-button', 'se-tab-button-link');
        imageMenuLinkTabButton.type = 'button';
        imageMenuUploadTabButton.tabIndex = 2;

        // Image Menu Tabs
        const imageMenuUploadTab = document.createElement('div');
        imageMenuUploadTab.classList.add('se-image-menu-tab', 'se-image-menu-upload-tab');

        const imageMenuLinkTab = document.createElement('div');
        imageMenuLinkTab.classList.add('se-image-menu-tab', 'se-image-menu-link-tab');
        imageMenuLinkTab.style.display = 'none';

        // Upload form inputs
        const imageMenuUploadInput = document.createElement('input');
        imageMenuUploadInput.type = 'file';
        imageMenuUploadInput.accept = 'image/jpeg,image/webp,image/gif,image/png,image/svg+xml,image/bmp,image/x-icon';
        imageMenuUploadInput.multiple = true;
        imageMenuUploadInput.style.display = 'none';

        // Drop zone
        const imageMenuUploadDropZone = document.createElement('div');
        imageMenuUploadDropZone.classList.add('se-file-drop-dropzone');

        const imageMenuUploadDropZoneText = document.createElement('p');
        imageMenuUploadDropZoneText.textContent = 'Click to upload OR drag and drop images here';
        imageMenuUploadDropZone.appendChild(createSVG(UPLOADICON, undefined, '48px', '48px'));
        imageMenuUploadDropZone.appendChild(imageMenuUploadDropZoneText);

        // Link form inputs
        const imageMenuForm = document.createElement('div');
        const imageMenuButtons = document.createElement('div');
        const imageInsertButton = document.createElement('button');
        const imageMenuCloseButton = document.createElement('button');
        const imageMenuFormLabel = document.createElement('p');
        const imageMenuFormSourceInput = document.createElement('input');

        imageMenu.id = 'image-menu';
        imageMenu.classList.add('se-popup', 'se-popup-top');
        imageMenu.dataset.active = 'false';

        imageMenuForm.classList.add('se-popup-form');

        imageMenuFormLabel.classList.add('se-form-label');
        imageMenuFormLabel.textContent = 'Image URL';

        // Set up image URL input field
        imageMenuFormSourceInput.classList.add('se-form-input');
        se.options.useBootstrap && imageMenuFormSourceInput.classList.add('form-control');

        imageMenuFormSourceInput.type = 'text';
        imageMenuFormSourceInput.placeholder = 'Insert a Link';

        // Set up the buttons for the image form
        imageMenuButtons.classList.add('se-popup-button-container');
        // Set types
        imageInsertButton.type = 'button';
        imageMenuCloseButton.type = 'button';

        // Insert button
        imageInsertButton.classList.add('se-popup-button', 'se-button-primary', 'se-image-insert-button');
        imageInsertButton.tabIndex = 0;
        imageInsertButton.textContent = 'Insert Image';

        // Close Button
        imageMenuCloseButton.classList.add('se-popup-button', 'se-button-secondary');
        imageMenuCloseButton.textContent = 'Close';

        // Add the label and input fields to a div. This will get cloned for the input fields
        // like width and height.
        imageMenuForm.appendChild(imageMenuFormLabel);
        imageMenuForm.appendChild(imageMenuFormSourceInput);

        // Height Input Form
        const imageMenuHeightForm = imageMenuForm.cloneNode(true);
        const imageMenuHeightFormInput = imageMenuHeightForm.querySelector('input');
        const imageMenuHeightFormLabel = imageMenuHeightForm.querySelector('p');

        imageMenuHeightFormInput.placeholder = 'Image Height';
        imageMenuHeightFormLabel.textContent = 'Height (px)';

        // Width Input Form
        const imageMenuWidthForm = imageMenuForm.cloneNode(true);
        const imageMenuWidthFormInput = imageMenuWidthForm.querySelector('input');
        const imageMenuWidthFormLabel = imageMenuWidthForm.querySelector('p');

        imageMenuWidthFormInput.placeholder = 'Image Width';
        imageMenuWidthFormLabel.textContent = 'Width (px)';

        // Set up alternate text input
        const imageMenuAltTextForm = imageMenuForm.cloneNode(true);
        const imageMenuAltTextInput = imageMenuAltTextForm.querySelector('input');
        const imageMenuAltTextLabel = imageMenuAltTextForm.querySelector('p');

        imageMenuAltTextInput.placeholder = 'Image Description';
        imageMenuAltTextLabel.textContent = 'Alternate Text';

        // Set up title text input
        const imageMenuTitleForm = imageMenuForm.cloneNode(true);
        const imageMenuTitleInput = imageMenuTitleForm.querySelector('input');
        const imageMenuTitleLabel = imageMenuTitleForm.querySelector('p');

        imageMenuTitleInput.placeholder = 'Tooltip Text';
        imageMenuTitleLabel.textContent = 'Title';

        const clearImageMenuInputs = function () {
            // Clear the inputs
            imageMenuFormSourceInput.value = '';
            imageMenuAltTextInput.value = '';
            imageMenuTitleInput.value = '';
            imageMenuHeightFormInput.value = '';
            imageMenuWidthFormInput.value = '';

            // Clear the files from the file input
            imageMenuUploadInput.value = '';
        };

        // Register click handlers

        // Create an event handler for upload tab click that will show the upload tab
        imageMenuUploadTabButton.onclick = (e) => {
            // Hide the link tab
            imageMenuLinkTab.style.display = 'none';
            // Show the upload tab
            imageMenuUploadTab.style.display = 'block';
            // Make this tab active
            imageMenuUploadTabButton.classList.add('tab-button-active');
            // Remove the active class from the link tab
            imageMenuLinkTabButton.classList.remove('tab-button-active');
            // Prevent event from bubbling up
            e.stopPropagation();
        };

        // Create an event handler for the link tab click that will show the link tab
        imageMenuLinkTabButton.onclick = (e) => {
            // Hide the upload tab
            imageMenuUploadTab.style.display = 'none';
            // Show the link tab
            imageMenuLinkTab.style.display = 'block';
            // Make this tab active
            imageMenuLinkTabButton.classList.add('tab-button-active');
            // Remove the active class from the upload tab
            imageMenuUploadTabButton.classList.remove('tab-button-active');
            // Prevent event from bubbling up
            e.stopPropagation();
        };

        // Create an event handler for when the images are selected
        imageMenuUploadInput.onchange = (e) => {
            // Clean up
            se.closeImageMenu();

            // Get the files that were selected
            const files = e.target.files;

            // For each file, get the data url and insert the image
            se.insertImages(files).then(() => {
                // Clear the inputs
                clearImageMenuInputs();
            });
        };

        // When clicking on the dropzone, trigger the file input
        imageMenuUploadDropZone.onclick = (e) => {
            se.body.focus();
            // Trigger the file input
            imageMenuUploadInput.click();
        };

        // Hook up dropzone events
        imageMenuUploadDropZone.ondragover = (e) => {
            e.preventDefault();

            imageMenuUploadDropZone.classList.add('dropzone-hot');
        };

        imageMenuUploadDropZone.ondragleave = (e) => {
            e.preventDefault();

            imageMenuUploadDropZone.classList.remove('dropzone-hot');
        };

        imageMenuUploadDropZone.ondrop = (e) => {
            e.preventDefault();

            imageMenuUploadDropZone.classList.remove('dropzone-hot');

            // Clean up
            se.closeImageMenu();

            const files = e.dataTransfer.files;
            // For each file, get the data url and insert the image
            se.insertImages(files).then(() => {
                // Clear the inputs
                clearImageMenuInputs();
            });
        };

        // Insert image button click event
        imageInsertButton.onclick = (e) => {
            se.body.focus();
            se.setRange();

            // Get the values of the input fields
            const linkValue = imageMenuFormSourceInput.value;
            const altTextValue = imageMenuAltTextInput.value;
            const titleValue = imageMenuTitleInput.value;
            const heightValue = imageMenuHeightFormInput.value;
            const widthValue = imageMenuWidthFormInput.value;

            // Check if we are inserting a new image or editing an existing one
            let imageToEdit = se.body.querySelector('.se-image-to-edit');

            // Link value may be left blank or isn't set because it is a data url image
            if (linkValue) {
                if (!imageToEdit) {
                    // No editing image found, so this is an insert. Insert the image.
                    if (se.browser.isFirefox() || se.browser.isEdge()) {
                        document.execCommand('insertImage', false, linkValue);
                    } else {
                        document.execCommand('insertImage', true, linkValue);
                    }

                    // Get the image we just inserted by querying the img tags and looking for the one
                    // that matches the image url.
                    let insertedImages = [...se.body.querySelectorAll(`img`)].filter((img) => img.src === linkValue);
                    // Get the last one that was added
                    imageToEdit = insertedImages[insertedImages.length - 1];
                } else {
                    // This is an image that we are editing, update the src attribute
                    imageToEdit.classList.remove('se-image-to-edit');
                    imageToEdit.setAttribute('src', `${linkValue}`);
                }
            }

            // Add / update the attributes for the image
            if (imageToEdit && (linkValue || imageToEdit.dataset.dataUrl)) {
                // Add the attributes for the image
                imageToEdit.setAttribute('height', `${heightValue}px`);
                imageToEdit.setAttribute('width', `${widthValue}px`);
                imageToEdit.setAttribute('alt', `${altTextValue}`);
                imageToEdit.setAttribute('title', `${titleValue}`);
            }

            // Call se.overflow in set timeout
            setTimeout(() => {
                se.overflow();
            }, 100);
            // Clear the inputs
            clearImageMenuInputs();
            // Focus the body
            se.body.focus();
            // Clean up
            se.closeImageMenu();
        };

        imageMenuCloseButton.onclick = (e) => {
            se.body.focus();
            se.closeImageMenu();
            clearImageMenuInputs();
        };

        // Set the tab text
        imageMenuUploadTabButton.textContent = 'Upload';
        imageMenuLinkTabButton.textContent = 'Image URL';

        // Add the tabs for the image menu
        imageMenuHeader.appendChild(imageMenuUploadTabButton);
        imageMenuHeader.appendChild(imageMenuLinkTabButton);

        imageMenu.appendChild(imageMenuHeader);

        // Add the fields to the image form
        imageMenuLinkTab.appendChild(imageMenuForm);
        imageMenuLinkTab.appendChild(imageMenuAltTextForm);
        imageMenuLinkTab.appendChild(imageMenuTitleForm);
        imageMenuLinkTab.appendChild(imageMenuWidthForm);
        imageMenuLinkTab.appendChild(imageMenuHeightForm);

        // Add the buttons
        imageMenuButtons.appendChild(imageInsertButton);
        imageMenuButtons.appendChild(imageMenuCloseButton);

        imageMenuLinkTab.appendChild(imageMenuButtons);

        imageMenu.appendChild(imageMenuLinkTab);

        // Build the upload form
        imageMenuUploadTab.appendChild(imageMenuUploadInput);
        imageMenuUploadTab.appendChild(imageMenuUploadDropZone);
        imageMenu.appendChild(imageMenuUploadTab);

        [...imageMenu.getElementsByTagName('input')].forEach((inp) => {
            inp.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    imageInsertButton.click();
                }
            };
        });
        return imageMenu;
    }

    initTableMenu() {
        const se = this;

        const tableMenu = document.createElement('div');
        const tableMenuHeader = document.createElement('p');
        const tableMenuForm = document.createElement('div');
        const tableMenuButtons = document.createElement('div');
        const tableMenuButton = document.createElement('button');
        const tableMenuCloseButton = document.createElement('button');
        const tableMenuFormLabel = document.createElement('p');
        const tableMenuFormColsInput = document.createElement('input');

        tableMenu.id = 'table-menu';
        tableMenu.classList.add('se-popup', 'se-popup-top');
        tableMenu.dataset.active = 'false';

        tableMenuForm.classList.add('se-popup-form');

        tableMenuFormLabel.classList.add('se-form-label');
        tableMenuFormLabel.textContent = 'Columns';

        tableMenuFormColsInput.classList.add('se-form-input');
        se.options.useBootstrap && tableMenuFormColsInput.classList.add('form-control');

        tableMenuFormColsInput.type = 'text';
        tableMenuFormColsInput.placeholder = 'Table Columns';

        tableMenuButtons.classList.add('se-popup-button-container');

        tableMenuButton.type = 'button';
        tableMenuCloseButton.type = 'button';

        tableMenuButton.classList.add('se-popup-button', 'se-button-primary');
        tableMenuCloseButton.classList.add('se-popup-button', 'se-button-secondary');

        tableMenuButton.textContent = 'Create Table';
        tableMenuCloseButton.textContent = 'Close';

        tableMenuForm.appendChild(tableMenuFormLabel);
        tableMenuForm.appendChild(tableMenuFormColsInput);

        // Rows Input
        const tableMenuRowsForm = tableMenuForm.cloneNode(true);
        const tableMenuRowsInput = tableMenuRowsForm.querySelector('input');
        const tableMenuRowsLabel = tableMenuRowsForm.querySelector('p');

        tableMenuRowsInput.placeholder = 'Table Rows';
        tableMenuRowsLabel.textContent = 'Rows';

        tableMenuRowsInput.value = '3';
        tableMenuFormColsInput.value = '3';

        function clearValues() {
            tableMenuFormColsInput.value = '3';
            tableMenuRowsInput.value = '3';
        }

        tableMenuButton.onclick = () => {
            se.body.focus();
            se.setRange();

            if (tableMenuFormColsInput.value && tableMenuRowsInput.value) {
                se.generateTable(parseInt(tableMenuFormColsInput.value), parseInt(tableMenuRowsInput.value));
            }

            clearValues();
            se.closeAllMenus();
            se.body.focus();
        };

        tableMenuCloseButton.onclick = () => {
            clearValues();
            se.closeAllMenus();
        };

        tableMenuHeader.classList.add('se-popup-header');
        tableMenuHeader.innerText = 'Insert Table';

        tableMenu.appendChild(tableMenuHeader);

        tableMenuButtons.appendChild(tableMenuButton);
        tableMenuButtons.appendChild(tableMenuCloseButton);
        tableMenu.appendChild(tableMenuRowsForm);
        tableMenu.appendChild(tableMenuForm);
        tableMenu.appendChild(tableMenuButtons);

        [...tableMenu.getElementsByTagName('input')].forEach((inp) => {
            inp.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            };
        });
        return tableMenu;
    }

    /**
     * Initializes the StrivenEditor meta data section for inserted links into the editor
     * @returns {HTMLElement} The StrivenEditor meta data section
     */
    initMetaDataSection() {
        const metaDataSection = document.createElement('div');
        metaDataSection.classList.add('se-metadata-section');

        return metaDataSection;
    }

    /**
     * Initializes the StrivenEditor meta data section for attached files
     * @returns {HTMLElement} The StrivenEditor attached file section
     */
    initFilesSection() {
        const se = this;

        const filesSection = document.createElement('div');
        filesSection.classList.add('se-files-section');

        window.addEventListener(
            'dragover',
            function (e) {
                e = e || event;
                e.preventDefault();
            },
            false
        );

        window.addEventListener(
            'drop',
            function (e) {
                e = e || event;
                e.preventDefault();
            },
            false
        );

        se.body.ondragenter = (e) => {
            if (!se.body.querySelector('.se-file-drop-dropzone') && e.dataTransfer.types.includes('Files')) {
                const dropzone = document.createElement('div');
                const dropzoneTextEl = document.createElement('p');

                dropzone.classList.add('se-file-drop-dropzone', 'dropzone-overlay');
                dropzone.contentEditable = 'false';
                dropzoneTextEl.textContent = 'Drop files to upload';

                dropzone.ondrop = (e) => e.target.remove();
                dropzone.ondragover = (e) => (dropzone.dataset.enabled = 'true');

                dropzone.append(dropzoneTextEl);
                se.body.append(dropzone);
            }
        };

        se.body.ondragleave = (e) => {
            const dropzone = se.body.querySelector('.se-file-drop-dropzone');
            dropzone && dropzone.dataset.enabled === 'true' && dropzone.remove();
        };

        se.body.ondrop = (e) => {
            const dropzone = se.body.querySelector('.se-file-drop-dropzone');
            dropzone && dropzone.remove();

            e.preventDefault();

            if (e.dataTransfer.types.includes('Files')) {
                if (e.dataTransfer.files.length) {
                    [...e.dataTransfer.files].forEach((file) => se.attachFile(file));
                }
            }
        };

        se.isEdge && (se.body.ondragover = (e) => e.preventDefault());

        return filesSection;
    }

    /**
     * Creates a file element and appends it to the attached files seciton of the editor
     * @param {String} name Name of the file
     * @param {Number} size Size of the file in bytes
     */
    createFileElement(name, size) {
        const se = this;

        const fileEl = document.createElement('div');
        const fileNameEl = document.createElement('p');
        const fileSizeEl = document.createElement('p');
        const removeFileEl = document.createElement('p');

        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = 'X';

        fileEl.classList.add('se-file');
        fileEl.dataset.fileindex = se.files.length - 1;

        fileNameEl.classList.add('se-file-name');

        fileSizeEl.classList.add('se-file-size');

        removeFileEl.classList.add('se-remove-link');

        removeFileEl.onclick = (e) => {
            se.files.splice(e.target.parentElement.dataset.fileindex, 1);
            e.target.parentElement.remove();
        };

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);

        se.filesSection.appendChild(fileEl);
    }

    /**
     * Creates a meta data element and appends it to the meta data section of the editor
     * @param {String} url Url of the inserted link
     * @param {String} img Image to use for the meta data item
     * @param {String} title Title of the meta data item
     * @param {String} description Description of the meta data item
     */
    createMetaDataElement(url, img, title, description) {
        const metaItemEl = document.createElement('div');
        const metaLinkEl = document.createElement('a');
        const metaImageEl = document.createElement('img');
        const metaDataEl = document.createElement('div');
        const metaDataTitleEl = document.createElement('h4');
        const metaDataDescriptionEl = document.createElement('p');
        const removeMetaDataEl = document.createElement('span');

        metaLinkEl.href = url;
        metaImageEl.src = img;
        metaDataTitleEl.textContent = title;
        metaDataDescriptionEl.textContent = description;
        removeMetaDataEl.textContent = 'X';

        metaLinkEl.target = 'blank';

        metaItemEl.classList.add('se-meta-item');

        metaImageEl.classList.add('se-meta-image');

        metaDataTitleEl.classList.add('se-meta-data-title');

        metaDataDescriptionEl.style.margin = '0';

        removeMetaDataEl.classList.add('se-remove-link');

        removeMetaDataEl.onclick = (e) => e.target.parentElement.remove();

        metaLinkEl.appendChild(metaImageEl);

        metaDataEl.appendChild(metaDataTitleEl);
        metaDataEl.appendChild(metaDataDescriptionEl);

        metaItemEl.appendChild(metaLinkEl);
        metaItemEl.appendChild(metaDataEl);
        metaItemEl.appendChild(removeMetaDataEl);

        se.metaDataSection.appendChild(metaItemEl);
    }

    /**
     * Constructs an svg given an object with the viewBox and d property
     * @param {Object} svgData ViewBox and D attributes to use for the <svg>
     * @returns {HTMLElement} Returns the constructed svg
     */
    constructSVG(svgData) {
        const se = this;

        const { viewBox, d } = svgData;
        const fillColor = se.options.toolbarOptionFillColor ? se.options.toolbarOptionFillColor : '#333';
        const xmlns = 'http://www.w3.org/2000/svg';
        const height = '14';
        const width = '16';

        const icon = document.createElement('span');
        const svg = `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="${xmlns}">`;
        const path = `<path fill="${fillColor}" d="${d}"/>`;

        icon.innerHTML = `${svg}${path}</svg>`;

        return icon;
    }

    /**
     * Initialize the responsive properties of the editor
     */
    initResponsive() {
        const se = this;

        if (!se.options.minimal) {
            function responsiveGroups(isResponsive) {
                se.toolbarGroups.forEach((group) => {
                    if (group) {
                        group.dataset.open = 'false';

                        group.style.display = isResponsive ? 'none' : 'block';
                        group.style.position = isResponsive ? 'absolute' : 'relative';

                        if (!isResponsive) {
                            group.setAttribute('style', null);
                            group.classList.remove('se-popup');
                            group.classList.remove(se.options.toolbarBottom ? 'se-popup-bottom' : 'se-popup-top');
                        }
                    }
                });

                se.toolbarMenus.forEach((menu) => {
                    function toggleMenu() {
                        const selectedGroup = se.toolbar.querySelector(`#group-${menu.id.split('-')[1]}`);

                        selectedGroup.classList.add('se-popup');
                        selectedGroup.classList.add(se.options.toolbarBottom ? 'se-popup-bottom' : 'se-popup-top');

                        se.setMenuOffset(menu, selectedGroup);

                        if (selectedGroup.dataset.open === 'false') {
                            // close opened groups
                            se.toolbarGroups.forEach((group) => {
                                if (group && group.dataset.open === 'true') {
                                    group.classList.remove('se-popup-open');
                                    group.style.display = 'none';
                                    group.dataset.open = 'false';
                                }
                            });

                            // open group
                            selectedGroup.classList.add('se-popup-open');
                            se.addPopupEscapeHandler();
                            selectedGroup.style.display = 'block';
                            selectedGroup.dataset.open = 'true';
                        } else {
                            selectedGroup.classList.remove('se-popup-open');
                            se.removePopupEscapeHandler();
                            selectedGroup.style.display = 'none';
                            selectedGroup.dataset.open = 'false';
                        }
                    }

                    if (menu) {
                        menu.style.display = isResponsive ? 'flex' : 'none';
                        menu.onclick = (e) => {
                            se.closeAllMenus();
                            toggleMenu();
                            se.body.focus();
                        };
                    }
                });

                [...se.toolbar.getElementsByClassName('se-toolbar-selection')].forEach((sl) => {
                    const respond = se.editor.offsetWidth < 500;
                    sl.style.display = respond ? 'none' : null;
                    const { nextElementSibling } = sl;
                    if (nextElementSibling.classList.contains('se-divider-section')) {
                        nextElementSibling.style.display = respond ? 'none' : null;
                    }
                });
            }

            function setResponsive() {
                let responsive = window.matchMedia('(max-width: 700px)').matches;

                responsiveGroups(responsive || se.editor.offsetWidth < 1100);
            }

            setResponsive();

            const ro = new ResizeObserver((e) => {
                se.closeAllMenus();
                setResponsive();
            });

            ro.observe(se.editor);
        } else {
            function responsiveMinimal(responsive) {
                const textDecorationMenu = se.toolbar.querySelector('#menu-textDecoration');
                const textDecorationGroup = se.toolbar.querySelector('#group-textDecoration');

                textDecorationMenu.onclick = () => {
                    setTimeout(() => {
                        const textdecorationPopup = se.toolbar.querySelector('#group-textDecoration');
                        let isOpen = textdecorationPopup.classList.contains('se-popup-open');

                        if (responsive) {
                            if (isOpen) {
                                textDecorationGroup.classList.remove('se-popup-open');
                            } else {
                                textDecorationGroup.classList.add('se-popup-open');
                            }
                        }
                    }, 10);
                };

                if (responsive) {
                    textDecorationMenu.style.display = 'inline-block';
                    textDecorationGroup.classList.add('se-popup');
                    textDecorationGroup.classList.add(se.options.toolbarBottom ? 'se-popup-bottom' : 'se-popup-top');
                } else {
                    textDecorationMenu.style.display = 'none';
                    textDecorationGroup.classList.remove('se-popup');
                }
            }

            function hideOption(option) {
                const optionEl = se.toolbar.querySelector(`#toolbar-${option}`);
                optionEl && (optionEl.style.display = 'none');
            }

            se.toolbarMenus.forEach((menu) => menu && (menu.style.display = 'none'));

            hideOption('strikethrough');
            hideOption('insertOrderedList');
            hideOption('textAlign');
            hideOption('removeFormat');

            if (
                se.toolbarTemplate
                    ? se.toolbarTemplate.offsetWidth + se.toolbarOptionsGroup.offsetWidth > se.editor.offsetWidth
                    : se.toolbarOptionsGroup.offsetWidth > se.editor.offsetWidth
            ) {
                responsiveMinimal(true);
            } else {
                responsiveMinimal(false);
            }

            const ro = new ResizeObserver((e) => {
                se.closeAllMenus();

                if (se.editor.offsetWidth < 300) {
                    responsiveMinimal(true);
                } else {
                    responsiveMinimal(false);
                }
            });

            ro.observe(se.editor);
        }
    }

    /**
     * Initilizes the overflow properties of the editor
     */
    initOverflow() {
        const se = this;

        const onFocus = se.body.onfocus;
        se.body.onfocus = () => {
            onFocus && onFocus();
            se.overflow();
        };

        const onBlur = se.body.onblur;
        se.body.onblur = () => {
            onBlur && onBlur();
            se.overflow();
        };

        const bodyKeypress = se.body.onkeypress;
        se.body.onkeypress = () => {
            bodyKeypress && bodyKeypress();
            se.overflow();
        };
    }

    /**
     * Gets the attached files of the editor
     * @returns {Array} Returns an array of attached files to the editor
     */
    getFiles() {
        const se = this;
        return se.files;
    }

    /**
     * Gets the content of the editor if there are attached files or provided content
     * @returns {String} Returns the HTML String of the editor's content
     */
    getContent() {
        const se = this;
        let html = se.body;
        const htmlView = !!se.editor.querySelector('.se-html');
        if (htmlView) {
            let dv = document.createElement('div');
            dv.innerHTML = se.body.textContent;

            html = dv;
        }
        const body = se.pruneScripts(html);

        // Remove contenteditable tags for body
        [...body.querySelectorAll('[contenteditable="true"]')].forEach((ce) => ce.removeAttribute('contenteditable'));

        //remove any link and image options
        [...body.querySelectorAll('.se-link-options')].forEach((lOpt) => lOpt.remove());
        [...body.querySelectorAll('.se-image-wrapper')].forEach((iwrap) => {
            //find image inside the wrapper and replace the wrapper with image
            const img = iwrap.querySelector('img');
            iwrap.parentNode.replaceChild(img, iwrap);
        });

        if (body.textContent || se.body.getElementsByTagName('img').length || se.body.getElementsByTagName('iframe').length) {
            return body.innerHTML;
        } else {
            return null;
        }
    }

    /**
     * Get the range of the window
     * @returns {Range} Range of the window
     */
    getRange() {
        try {
            const selection = window.getSelection();
            if (selection) {
                return window.getSelection().getRangeAt(0);
            }
        } catch (e) {}
    }

    /**
     * Gets the meta data from the metaUrl option
     * @param {String} url Url to fetch meta data from
     * @returns {Promise} Returns a promise that has the resolves with the meta data object
     */
    getMeta(url) {
        const se = this;
        return fetch(se.options.metaUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetUrl: url })
        }).then((res) => res.json());
    }

    /**
     * Gets the image path from the imageUrl option
     * @param {String} imageEncoding Encoded image string
     * @returns {Promise} Returns a promise that resolves with the image path
     */
    getImage(imageEncoding) {
        const se = this;
        return new Promise((resolve, reject) => {
            fetch(se.options.imageUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageEncoding })
            })
                .then((response) => {
                    response
                        .json()
                        .then((data) => {
                            resolve(data);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * Gets the editors active options based on UI
     * @returns {Array} Returns an array with the toolbar commands currently active
     */
    getActiveOptions() {
        const se = this;
        return [...se.toolbarOptions].filter((opt) => opt.classList.contains('se-toolbar-option-active')).map((opt) => opt.id.split('-').pop());
    }

    /**
     * String to validate url pattern
     * @param {String} str
     * @returns {Boolean} Returns true if url is valid
     */
    validURL(str) {
        const pattern = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return pattern.test(str);
    }

    /**
     * Checks if the content overflows and removes or provides scrollbar
     */
    overflow() {
        const se = this;

        const body = se.body;
        body.scrollHeight > body.clientHeight ? (body.style.overflowY = 'scroll') : (body.style.overflowY = 'hidden');
        body.scrollWidth > body.clientWidth ? (body.style.overflowX = 'scroll') : (body.style.overflowX = 'hidden');
    }

    /**
     * Prunes scripts from an elemenet
     * @param {HTMLElement} el Element to prune scripts from
     * @returns {HTMLElement} Returns the sanitized element
     */
    pruneScripts(el) {
        const scripts = [...el.querySelectorAll('script')];
        scripts.forEach((script) => script.remove());

        return el;
    }

    /**
     * Prunes styles from an element
     * @param {HTMLElement} el Element to prune styles from
     * @returns {HTMLElemenet} Returns the sanitized element
     */
    pruneStyles(el) {
        const styles = [...el.querySelectorAll('style')];
        styles.forEach((style) => style.remove());

        return el;
    }

    /**
     * Prunes inline position styles from elements
     * @param {HTMLElement} el Element to prune inline styles from
     * @returns {HTMLElement} Returns the sanitized element
     */
    pruneInlineStyles(el) {
        let inlineStyleNodes = [...el.querySelectorAll('[style]')];
        inlineStyleNodes = inlineStyleNodes.filter((node) => node.style.position);
        inlineStyleNodes.forEach((node) => (node.style.position = 'static'));
        return el;
    }

    /* Cleans css  */
    cleanCss(node) {
        if (node.childNodes && node.childNodes.length) {
            node.childNodes.forEach((cn) => {
                if (cn.nodeType == 1) {
                    if (cn.className !== 'se-pasted-content') {
                        cn.className = '';
                    }
                    this.cleanCss(cn);
                }
            });
        }
    }

    /**
     * Denormalizes provided bytes into human readable string
     * @param {Number} bytes
     * @param {Number} decimals
     * @returns {String} Human readable file size string
     */
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    /**
     * Validates file based on provided extensions. If no extensions are provided, defaults
     * to a predefined array.
     * @param {File} file File to validate
     * @returns {Boolean} Returns true if file is valid
     */
    validateFile(file) {
        const se = this;

        const extension = file && file.name.split('.').pop().toLowerCase();
        if (extension) {
            return se.options.extensions.includes(`.${extension}`);
        } else {
            return false;
        }
    }

    /**
     * Attaches file to the editor
     * @param {File} file File to attach to editor
     */
    attachFile(file) {
        const se = this;

        if (se.validateFile(file)) {
            se.files.push(file);
            se.createFileElement(file.name, se.formatBytes(file.size));
            se.options.onValidFile && se.option.onValidFile();
        } else {
            se.fileInvalid();
        }
    }

    /**
     * Fires the file invalid animation on the editor
     */
    fileInvalid() {
        const se = this;

        se.options.onInvalidFile && se.options.onInvalidFile();
        se.body.style.transition = 'background-color .5s';
        se.body.style.backgroundColor = '#e3bdbd';
        setTimeout(() => {
            se.body.style.backgroundColor = 'inherit';
            setTimeout(() => (se.body.style.transition = 'none'), 500);
        }, 500);
    }

    /**
     * Sets the offset of the popup menu based on the button
     * @param {HTMLElement} button Button to set offset for
     * @param {HTMLElement} menu Popup menu to set offset on
     */
    setMenuOffset(button, menu) {
        const se = this;
        // Get the rect of the button to position the pop up. Sometimes, this may not be available
        // yet, so we will need to open the menu to let the browser calculate bounds.
        let buttonRect = button.getClientRects()[0];

        // Find the group that has the same group name as the button
        if (!buttonRect) {
            const toolbarMenu = se.toolbarMenus?.find((menu) => menu.getAttribute('data-name') === button.getAttribute('data-group-name'));
            if (toolbarMenu) {
                // Trigger the toolbar menu because if we don't, and the mode is responsive, then the button is technically not there
                // yet and the below code will fail because the button dimensions can't be retrieved.
                toolbarMenu.onclick();
                // Close the menu immediately so it isn't visible. This should be enough for the browser
                // to calculate the rects
                se.closeAllMenus();
            }
        }

        const editorRect = se.editor.getClientRects()[0];
        // Get the rect of the button. Hopefully, the browser has already calculated this when we forced the menu open.
        buttonRect = button.getClientRects()[0];
        const buttonOffset = buttonRect.left - editorRect.left;
        const menuRight = buttonOffset + menu.clientWidth;

        let offset;
        if (menuRight > se.editor.clientWidth) {
            offset = buttonOffset + (se.editor.clientWidth - menuRight);
        } else {
            offset = buttonOffset;
        }

        menu.style.left = `${offset}px`;
    }

    /**
     * Opens the editor's link menu popup
     */
    openLinkMenu() {
        const se = this;

        se.closeAllMenus();

        se.setMenuOffset(se.toolbar.querySelector('.se-toolbar-option#toolbar-link'), se.linkMenu);
        se.linkMenu.classList.add('se-popup-open');

        se.linkMenu.dataset.active = 'true';
        se.addPopupEscapeHandler();

        se.linkMenu.scrollIntoView({ block: 'nearest', inline: 'nearest' });

        const submitEvt = (e) => {
            if (e.key === 'Enter') {
                const submitEl = se.linkMenu.querySelector('button');
                submitEl.click();
                e.preventDefault();
                window.removeEventListener('keyup', se.linkMenu.submitEvt);
            }
        };

        se.linkMenu.submitEvt = submitEvt;
        window.addEventListener('keyup', se.linkMenu.submitEvt);
    }

    /**
     * Opens the editor's image menu popup
     */
    openImageMenu(isEdit) {
        const se = this;

        se.closeAllMenus();

        se.setMenuOffset(se.toolbar.querySelector('#toolbar-image'), se.imageMenu);

        // Select the tab buttons
        const imageMenuUploadTabButton = se.imageMenu.querySelector('.se-tab-button-upload');
        const imageMenuLinkTabButton = se.imageMenu.querySelector('.se-tab-button-link');
        const imageInsertButton = se.imageMenu.querySelector('.se-image-insert-button');

        if (isEdit) {
            imageMenuLinkTabButton.click();
            imageMenuUploadTabButton.setAttribute('disabled', 'disabled');
            imageMenuUploadTabButton.style.cursor = 'not-allowed';
            // Change the text of the insert image button to Update Image
            imageInsertButton.textContent = 'Update Image';
            // Set cursor to indicate disabled
        } else {
            imageMenuUploadTabButton.click();
            imageMenuUploadTabButton.removeAttribute('disabled');
            imageMenuUploadTabButton.style.cursor = 'pointer';
            // Rename insert image button
            imageInsertButton.textContent = 'Insert Image';
        }

        // Clear the input fields
        const imageInputs = se.imageMenu.querySelectorAll('input');
        for (const imageInput of imageInputs) {
            imageInput.value = '';
            // Enable the input
            imageInput.removeAttribute('disabled');
        }

        se.imageMenu.classList.add('se-popup-open');

        se.imageMenu.dataset.active = 'true';
        se.addPopupEscapeHandler();
        se.imageMenu.scrollIntoView({ block: 'nearest', inline: 'nearest' });

        const submitEvt = (e) => {
            if (e.key === 'Enter') {
                const submitEl = se.imageMenu.querySelector('button');
                submitEl.click();
                e.preventDefault();
                window.removeEventListener('keyup', se.imageMenu.submitEvt);
            }
        };

        se.imageMenu.submitEvt = submitEvt;
        window.addEventListener('keyup', se.imageMenu.submitEvt);
    }

    openTableMenu() {
        const se = this;

        se.closeAllMenus();

        se.setMenuOffset(se.toolbar.querySelector('#toolbar-table'), se.tableMenu);
        se.tableMenu.classList.add('se-popup-open');

        se.tableMenu.dataset.active = 'true';
        se.addPopupEscapeHandler();

        const submitEvt = (e) => {
            if (e.key === 'Enter') {
                const submitEl = se.tableMenu.querySelector('button');
                submitEl.click();
                e.preventDefault();
                window.removeEventListener('keyup', se.tableMenu.submitEvt);
            }
        };

        se.tableMenu.submitEvt = submitEvt;
        window.addEventListener('keyup', se.tableMenu.submitEvt);
    }

    clearLinksToEdit(force) {
        const se = this;

        if (force || (se.linkMenu && !se.linkMenu.classList.contains('se-popup-open'))) {
            [...se.body.querySelectorAll('.se-link-options')].forEach((opt) => opt.remove());

            for (const lnk of se.body.querySelectorAll('a.se-link-to-edit[href="#"]')) {
                lnk.outerHTML = lnk.textContent;
            }

            for (const lnk of se.body.querySelectorAll('.se-link-to-edit')) {
                lnk.classList.remove('se-link-to-edit');
            }
        }
    }

    clearImagesToEdit(force) {
        const se = this;

        if (force || (se.imageMenu && !se.imageMenu.classList.contains('se-popup-open'))) {
            // Find any lingering edit menus
            const imageEditMenus = se.body.querySelectorAll('.se-image-options');
            for (const menu of imageEditMenus) {
                menu.remove();
            }

            // Clear the edit class from the images
            const imagesToEdit = se.body.querySelectorAll('.se-image-to-edit');
            for (const img of imagesToEdit) {
                img.classList.remove('se-image-to-edit');
                let wrapper = img.parentElement;
                if (wrapper.classList.contains('se-image-wrapper')) {
                    wrapper.parentElement.insertBefore(img, wrapper);
                    wrapper.remove();
                }
            }
        }
    }

    /**
     * Closes the editor's link menu popup
     */
    closeLinkMenu() {
        const se = this;

        se.closeAllMenus();
        se.linkMenu.classList.remove('se-popup-open');
        se.linkMenu.dataset.active = 'false';
        se.removePopupEscapeHandler();
        se.clearLinksToEdit();
    }

    /**
     * Closes the editor's image menu popup
     */
    closeImageMenu() {
        const se = this;

        se.closeAllMenus();
        se.imageMenu.classList.remove('se-popup-open');
        se.imageMenu.dataset.active = 'false';
        se.removePopupEscapeHandler();
        se.clearImagesToEdit();
    }

    closeTableMenu() {
        const se = this;

        se.closeAllMenus();
        se.tableMenu.classList.remove('se-popup-open');
        se.tableMenu.dataset.active = 'false';
        se.removePopupEscapeHandler();
    }

    /**
     * Closes all menus opended on the editor instance
     */
    closeAllMenus() {
        const se = this;

        const popups = se.editor.getElementsByClassName('se-popup');
        [...popups].forEach((popup) => {
            popup.classList.remove('se-popup-open');
            popup.dataset.active = 'false';

            if (popup.submitEvt) {
                window.removeEventListener('keyup', popup.submitEvt);
            }
        });
    }

    /**
     * Binds the escape handler event
     * @param {Event} evt Event to bind to
     */
    popupEscapeHandler(evt) {
        const se = this;

        if (evt.which === 27) {
            //clear unused links
            se.clearLinksToEdit(true);
            se.clearImagesToEdit(true);

            //close all open popups
            se.closeAllMenus();
        }
    }

    /**
     * Binds the escape handler to the editor for popup menus
     */
    addPopupEscapeHandler() {
        const se = this;

        se.removePopupEscapeHandler();
        se.editor.addEventListener('keyup', se.bound_popupEscapeHandler);
    }

    /**
     * Removes the escape handler on the editor for popup menus
     */
    removePopupEscapeHandler() {
        const se = this;
        se.editor.removeEventListener('keyup', se.bound_popupEscapeHandler);
    }

    /**
     * Clears the editor and sets the its content with html string
     * @param {String} html Html string to set the content with
     */
    setContent(html) {
        const se = this;

        se.clearContent();
        if (html) {
            se.body.innerHTML = html;
            se.makeLinksClickable();
        }
    }

    /**
     * Removes ranges on the window and sets it to the provided range
     * @param {Range} range Range to set the window with
     */
    setRange(range) {
        const se = this;

        try {
            if (range) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            } else {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(se.range);
            }
        } catch (e) {}
    }

    /**
     * Clears the editors content
     */
    clearContent() {
        const se = this;
        se.body.innerHTML = '';
    }

    /**
     * Clears all attached files to the editor
     */
    clearFiles() {
        const se = this;
        se.files = [];
        se.filesSection.innerHTML = '';
    }

    /**
     * Gets the text content of the editor
     * @returns {String} Returns text content of the editor
     */
    getTextContent() {
        const se = this;
        return se.body.textContent;
    }

    /**
     * Sanitizes the provided element
     * @param {HTMLElement} dirtyNode HTML Node to sanitize
     * @returns {HTMLElement} Cleaned HTML node
     */
    scrubHTML(dirtyNode) {
        const cleanNode = document.createElement('div');

        cleanNode.append(document.createTextNode(dirtyNode.textContent));

        return cleanNode;
    }

    /**
     * Sets the toolbars stated based on which options are enabled on the document
     */
    toolbarState() {
        const se = this;
        se.options.toolbarOptions.forEach((option) => {
            if (typeof option === 'string') {
                const toolbarOption = se.toolbar.querySelector(`#toolbar-${option}`);
                if (!option.toLowerCase().includes('justify') && !option.toLowerCase().includes('list')) {
                    if (document.queryCommandState(option)) {
                        toolbarOption && toolbarOption.classList.add('se-toolbar-option-active');
                        // toolbarOption.querySelector('path').setAttribute('fill', se.options.activeOptionColor);
                    } else {
                        toolbarOption && toolbarOption.classList.remove('se-toolbar-option-active');
                        // toolbarOption.querySelector('path').setAttribute('fill', '#333');
                    }
                }
            }
        });
    }

    /*
     * Update the font states on the toolbar
     */
    setFontStates() {
        const se = this;
        if (se.fontSize && !se.browser.isFirefox()) {
            se.fontSize.textContent = FONTSIZES[document.queryCommandValue('fontSize')] || '(inherited size)';
        }

        if (se.fontName) {
            const currentfont = document.queryCommandValue('fontName').split(',')[0].replace(/\"/g, '');

            se.fontName.textContent = currentfont || '(inherited font)';
        }

        se.foreColor && se.foreColor.setAttribute('fill', document.queryCommandValue('foreColor'));
        se.hiliteColor && !se.browser.isFirefox() && se.hiliteColor.setAttribute('fill', document.queryCommandValue('hiliteColor'));
    }

    /*
     * Execute current state of the fonts as displayed in the toolbar
     */
    execFontStates() {
        const se = this;

        if (se.browser.isFirefox() || se.browser.isEdge()) {
            se.foreColor && document.execCommand('foreColor', false, se.foreColor.getAttribute('fill'));
            se.hiliteColor && document.execCommand('hiliteColor', false, se.hiliteColor.getAttribute('fill'));
            se.fontName && document.execCommand('fontName', false, se.fontName.textContent);
            se.fontSize && document.execCommand('fontSize', false, se.fontSize.textContent.split(' ')[0]);
        } else {
            se.foreColor && document.execCommand('foreColor', true, se.foreColor.getAttribute('fill'));
            se.hiliteColor && document.execCommand('hiliteColor', true, se.hiliteColor.getAttribute('fill'));

            se.fontName && document.execCommand('fontName', true, se.fontName.textContent);
            se.fontSize && document.execCommand('fontSize', true, parseInt(se.fontSize.dataset.command));
        }
    }

    generateTable(cols = 3, rows = 3) {
        const se = this;

        let table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            table.insertRow();
        }

        [...table.rows].forEach((r) => {
            for (let i = 0; i < cols; i++) {
                r.insertCell();
            }
        });

        table.setAttribute('data-init', true);
        se.executeCommand('insertHTML', table.outerHTML);

        table = se.body.querySelector('table[data-init="true"]');
        if (table) {
            table.removeAttribute('data-init');
            table.setAttribute('cellspacing', '0');
            table.setAttribute('style', 'width: 100%');

            const tdCollection = [...table.getElementsByTagName('td')];
            tdCollection.forEach((td) => {
                td.setAttribute('style', 'border: 1px solid #ddd');

                td.onfocus = () => {
                    se.toolbarState();
                };

                td.onclick = () => {
                    const range = se.getRange();
                    td.textContent && range.selectNode(td);
                    se.toolbarState();
                };
            });
        }

        return table;
    }

    /**
     * This method is used to detect the user browser and environment
     */
    establishBrowser() {
        const se = this;

        const userAgent = ((navigator && navigator.userAgent) || '').toLowerCase();
        const vendor = ((navigator && navigator.vendor) || '').toLowerCase();

        const comparator = {
            '<': function (a, b) {
                return a < b;
            },
            '<=': function (a, b) {
                return a <= b;
            },
            '>': function (a, b) {
                return a > b;
            },
            '>=': function (a, b) {
                return a >= b;
            }
        };

        const compareVersion = (version, range) => {
            const str = range + '';
            const n = +(str.match(/\d+/) || NaN);
            const op = str.match(/^[<>]=?|/)[0];
            return comparator[op] ? comparator[op](version, n) : version == n || n !== n;
        };

        se.browser = {
            userAgent,
            vendor
        };

        // detect opera
        se.browser.isOpera = function isOpera(range) {
            const match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect chrome
        se.browser.isChrome = function isChrome(range) {
            const match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
            return match !== null && !se.isOpera() && compareVersion(match[1], range);
        };

        // detect firefox
        se.browser.isFirefox = function isFirefox(range) {
            const match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect safari
        se.browser.isSafari = function isSafari(range) {
            const match = userAgent.match(/version\/(\d+).+?safari/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect internet explorer
        se.browser.isIE = function isIE(range) {
            const match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect edge
        se.browser.isEdge = function isEdge(range) {
            const match = userAgent.match(/edge\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect blink engine
        se.browser.isBlink = function isBlink() {
            return (se.isChrome() || se.isOpera()) && !!window.CSS;
        };
    }

    /**
     * Checks if editor is being focused on (inclusive to children and relative elements)
     * @returns {Boolean} Returns true if editor is being focused
     */
    isEditorInFocus() {
        const se = this;

        let activeEl = document.activeElement;
        var isEditor = (el) => {
            if (el === se.editor) {
                return true;
            } else if (el === document.body) {
                return false;
            }
            return el.parentNode && isEditor(el.parentNode);
        };
        return isEditor(activeEl);
    }

    /*
  parses all links on the editor or links passed and makes them clickable and adds option to change/remove the link
  */
    makeLinksClickable(links = []) {
        const se = this;
        if (!links.length) {
            const linkElements = se.body.getElementsByTagName('a');
            if (linkElements.length > 0) {
                links = [...linkElements];
            }
        }

        links.forEach((link) => {
            link.onmousemove = (e) => {
                e.ctrlKey && (link.style.cursor = 'pointer');
            };

            link.onclick = (e) => {
                if (e.ctrlKey || e.metaKey) {
                    const anchor = document.createElement('a');
                    anchor.setAttribute('href', link.getAttribute('href'));
                    anchor.setAttribute('target', '_blank');
                    document.body.append(anchor);
                    anchor.click();
                    anchor.remove();
                } else if (!link.querySelector('.se-link-options')) {
                    const linkOptions = document.createElement('span');
                    linkOptions.setAttribute('class', 'se-link-options');
                    linkOptions.setAttribute('contenteditable', false);
                    linkOptions.onclick = (e) => e.stopPropagation();
                    link.append(linkOptions);

                    const removeOption = document.createElement('span');
                    removeOption.textContent = 'Remove';
                    removeOption.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        linkOptions.remove();

                        const replNode = document.createElement('span');
                        replNode.textContent = link.textContent;
                        link.replaceWith(replNode);
                    };

                    const changeOption = document.createElement('span');
                    changeOption.textContent = 'Change';
                    changeOption.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        linkOptions.remove();

                        link.classList.add('se-link-to-edit');
                        se.openLinkMenu();

                        const linkInputs = se.linkMenu.querySelectorAll('input');
                        linkInputs[0]['value'] = link.getAttribute('href');
                        linkInputs[1]['value'] = link.textContent;
                        linkInputs[2]['checked'] = link.getAttribute('target') === '_blank';

                        setTimeout(() => linkInputs[0].select(), 100);
                    };

                    linkOptions.append(changeOption);
                    linkOptions.append(removeOption);

                    const optionHandler = () => {
                        try {
                            const r = se.getRange();
                            const rNode = r['commonAncestorContainer']['parentElement'];
                            if (rNode !== link) {
                                linkOptions.remove();
                                se.body.removeEventListener('click', optionHandler);
                            }
                        } catch (e) {
                            linkOptions.remove();
                            window.removeEventListener('click', optionHandler);
                        }
                    };

                    window.addEventListener('click', optionHandler);
                }
            };

            link.onmouseleave = () => (link.style.cursor = null);

            link.setAttribute('contenteditable', true);
        });
    }

    /**
     * Creates links
     * @parma {HTMLElement} Element to convert links in
     */
    createLinks(el) {
        const se = this;
        const htmlView = !!se.editor.querySelector('.se-html');
        if (!htmlView) {
            linkify(
                el || se.body,
                {
                    target: {
                        url: '_blank'
                    },
                    className: 'linkified',
                    validate: {
                        email: function (value) {
                            return false;
                        }
                    }
                },
                document
            );
        }
        var links = [];
        if (el) {
            const linkElements = el.getElementsByTagName('a');
            if (linkElements.length > 0) {
                links = [...linkElements];
            }
        }
        this.makeLinksClickable(links);

        // Trigger input event
        let inpEvent = new Event('input', { cancelable: true, bubbles: true });
        se.body.dispatchEvent(inpEvent);
    }

    /*
     * Init Pickr Plugin menu for font colors
     * @param {Object} Pickr instance
     * @param {Function} Handler even for the select button
     */
    initPickrMenu(pickr, onclick) {
        const pickrMenu = pickr['_root']['app'];

        const pickrMenuActions = document.createElement('div');
        const pickrMenuButton = document.createElement('button');
        const pickrMenuClose = document.createElement('button');

        pickrMenuButton.setAttribute('type', 'button');
        pickrMenuClose.setAttribute('type', 'button');

        pickrMenuActions.setAttribute('style', 'display: flex; justify-content: flex-end; margin-top: 10px;');

        pickrMenuButton.textContent = 'Select';
        pickrMenuClose.textContent = 'Close';

        pickrMenuButton.classList.add('se-popup-button');
        pickrMenuButton.classList.add('se-button-primary');
        pickrMenuClose.classList.add('se-popup-button');
        pickrMenuClose.classList.add('se-button-secondary');

        pickrMenuClose.onclick = () => pickr.hide();

        pickrMenuButton.onclick = onclick;

        pickrMenuActions.append(pickrMenuButton);
        pickrMenuActions.append(pickrMenuClose);
        pickrMenu.append(pickrMenuActions);
    }

    /**
     * Executes a command on the document with respect to browser
     * @param {String} command Command to execute on the document
     */
    executeCommand(command, input) {
        const se = this;

        function textDecorationInsert(el) {
            const r = se.range || new Range();
            se.setRange(r);

            const b = document.createElement(el);
            const selNode = se.body.querySelector('.se-init-sel') || document.createElement('span');
            selNode.setAttribute('class', 'se-init-sel');
            selNode.innerHTML = '&nbsp;';

            b.append(selNode);

            const fc = se.body.firstChild;
            fc && fc.append ? fc.append(b) : se.body.append(b);

            r.selectNode(selNode);
            r.collapse();
        }

        switch (command) {
            case 'html':
                const saveoption = document.createElement('div');
                saveoption.classList.add('se-toolbar-option');
                saveoption.setAttribute('title', 'Design');
                saveoption.append(createSVG(DESIGNICON));

                se.toolbar.classList.add('se-html');

                saveoption.onclick = () => {
                    saveoption.remove();
                    se.body.style.fontFamily = null;
                    // Remove white-space: pre to prevent text wrapping weirdly
                    se.body.style.whiteSpace = null;

                    se.toolbar.classList.remove('se-html');
                    se.setContent(se.body.textContent);
                };

                se.toolbar.prepend(saveoption);

                se.body.style.fontFamily = 'Courier';

                // Add this so that the textContent will wrap at line breaks (not br tags)
                se.body.style.whiteSpace = 'pre';

                // Format the HTML so that it looks somewhat pretty
                var options = {
                    indent_size: 4,
                    unformatted: []
                };

                let formatedHtml = js_beautify.html(se.body.innerHTML, options);

                // Set the content of the editor to the formatted html
                se.body.textContent = formatedHtml;
                se.overflow();

                break;
            case 'fullscreen':
                const opt = se.toolbar.querySelector('#toolbar-fullscreen');

                if (!se.editor.oncollapse) {
                    se.editor.oncollapse = () => {
                        if (opt.original !== se.body.innerHTML && se.options.change) {
                            se.createLinks();
                            se.options.change(se.getContent());
                        }

                        opt.innerHTML = '';
                        opt.append(createSVG(EXPANDICON));

                        se.editor.style.maxHeight = null;
                        document.body.style.overflow = null;

                        se.body.style.height = se.editor.getAttribute('height');
                        se.body.style.minHeight = se.editor.getAttribute('min-height');
                        se.body.style.maxHeight = se.editor.getAttribute('max-height');

                        se.overflow();

                        opt.removeAttribute('data-fullscreen');
                    };
                }

                if (opt.getAttribute('data-fullscreen')) {
                    se.editor.collapse && se.editor.collapse();
                    se.options.onFullscreenCollapse && se.options.onFullscreenCollapse();
                } else {
                    blowUpElement(se.editor, '#fff', (e) => {
                        opt.original = se.body.innerHTML;
                        opt.innerHTML = '';
                        opt.append(createSVG(COLLAPSEICON));

                        document.body.style.overflow = 'hidden';

                        se.body.style.height = '100%';
                        se.body.style.minHeight = null;
                        se.body.style.maxHeight = null;

                        se.editor.style.maxHeight = 'inherit';
                        opt.setAttribute('data-fullscreen', 'active');
                    });
                }
                break;
            case 'foreColor':
            case 'hiliteColor':
                const colorOption = se.toolbar.querySelector(`#toolbar-${command}`);
                const colorIcon = colorOption.getElementsByTagName('path')[0];
                se[command] = colorIcon;

                const defaultColor = () => {
                    if (command === 'foreColor') {
                        return '#000';
                    }

                    if (command === 'hiliteColor') {
                        return '#fff';
                    }

                    return '#000';
                };

                if (colorOption.dataset.init !== 'true') {
                    const pickr = Pickr.create({
                        el: colorOption,
                        theme: 'classic',
                        container: se.editor,
                        useAsButton: true,
                        default: defaultColor(),
                        components: {
                            preview: true,
                            palette: true,
                            hue: true,
                            interaction: { hex: true, input: true }
                        }
                    });

                    se.initPickrMenu(pickr, () => {
                        const color = pickr.getColor().toHEXA().toString();

                        function execute() {
                            if (se.browser.isEdge() || se.browser.isFirefox()) {
                                document.execCommand(command, false, color);
                            } else {
                                document.execCommand(command, true, color);
                            }
                        }

                        colorIcon.setAttribute('fill', color);

                        const enabler = () => {
                            execute();
                            se.body.removeEventListener('keydown', enabler);
                        };

                        if (se.range) {
                            if (se.range.collapsed) {
                                se.body.addEventListener('keydown', enabler);
                            } else {
                                execute();
                            }
                        } else {
                            se.body.addEventListener('keydown', enabler);
                        }

                        pickr.hide();
                    });

                    pickr.on('init', (p) => {
                        colorOption.dataset.init = 'true';
                        pickr.show();
                    });

                    pickr.on('change', (h, p) => {
                        const color = h.toHEXA().toString();
                        colorIcon.setAttribute('fill', color);
                    });

                    pickr.on('hide', (p) => {
                        const color = p.getColor().toHEXA().toString();

                        se.body.focus();
                    });
                }
                break;
            case 'insertOrderedList':
                if (!se.body.textContent) {
                    const list = document.createElement('ol');
                    const item = document.createElement('li');
                    list.append(item);

                    se.body.append(list);

                    const r = se.range || new Range();
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(r);
                    r.selectNode(item);

                    return false;
                }

                if (se.browser.isFirefox() || se.browser.isEdge()) {
                    document.execCommand(command, false);
                } else {
                    document.execCommand(command);
                }
                break;
            case 'insertUnorderedList':
                if (!se.body.textContent) {
                    const list = document.createElement('ul');
                    const item = document.createElement('li');
                    list.append(item);

                    se.body.append(list);

                    const r = se.range || new Range();
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(r);
                    r.selectNode(list);

                    return false;
                }

                if (se.browser.isFirefox() || se.browser.isEdge()) {
                    document.execCommand(command, false);
                } else {
                    document.execCommand(command);
                }
                break;
            case 'attachment':
                const attachmentInput = document.createElement('input');
                attachmentInput.style.display = 'none';
                attachmentInput.type = 'file';
                attachmentInput.multiple = true;
                attachmentInput.style.visibility = 'hidden';
                attachmentInput.style.display = 'none';
                document.body.append(attachmentInput);
                attachmentInput.onchange = (e) => {
                    [...attachmentInput.files].forEach((file) => se.attachFile(file));
                    attachmentInput.remove();
                };
                attachmentInput.click();
                break;
            case 'link':
                if (se.linkMenu.dataset.active === 'true') {
                    se.closeLinkMenu();
                } else {
                    if (window.getSelection().toString().split('\n').length > 1) {
                        return;
                    }

                    function traverseLink(trav, val) {
                        if (trav && trav !== se.body) {
                            if (trav.querySelector) {
                                const travQuery = trav.querySelector(`a[href="${val}"]`);
                                if (travQuery) {
                                    return travQuery;
                                }
                            }

                            if (trav.tagName === 'A' && trav.getAttribute('href') === val) {
                                return trav;
                            } else {
                                return traverseLink(trav.parentElement, val);
                            }
                        } else {
                            return se.body.querySelector(`a[href="${val}"]`);
                        }
                    }
                    const r = se.getRange();

                    if (r) {
                        if (r.collapsed) {
                            const linkToEdit = document.createElement('a');
                            linkToEdit.setAttribute('class', 'se-link-to-edit');

                            r.insertNode(linkToEdit);
                        } else {
                            if (se.browser.isFirefox() || se.browser.isEdge()) {
                                document.execCommand('createLink', false, '#');
                            } else {
                                document.execCommand('createLink', true, '#');
                            }

                            const travLink = traverseLink(r['startContainer'], '#');
                            travLink && travLink.classList.add('se-link-to-edit');
                        }

                        se.openLinkMenu();
                    }

                    setTimeout(() => {
                        const selection = se.linkMenu.querySelector('input[placeholder="Text content"]');

                        selection && (selection.value = document.getSelection().toString());
                        se.linkMenu.querySelector('input').select();
                    }, 100);
                }
                break;
            case 'image':
                if (se.imageMenu.dataset.active === 'true') {
                    se.closeImageMenu();
                } else {
                    se.openImageMenu();

                    se.range = se.getRange();
                    setTimeout(() => se.imageMenu.querySelector('input').focus(), 100);
                }
                break;
            case 'table':
                if (se.tableMenu.dataset.active === 'true') {
                    se.closeTableMenu();
                } else {
                    se.openTableMenu();

                    se.range = se.getRange();
                    setTimeout(() => se.tableMenu.querySelector('input').focus(), 100);
                }
                break;
            case 'bold':
                if (se.body.textContent.trim() === '') {
                    textDecorationInsert('b');
                    break;
                }
            case 'italic':
                if (se.body.textContent.trim() === '') {
                    textDecorationInsert('i');
                    break;
                }
            case 'underline':
                if (se.body.textContent.trim() === '') {
                    textDecorationInsert('u');
                    break;
                }
            case 'strikethrough':
                if (se.body.textContent.trim() === '') {
                    textDecorationInsert('strike');
                    break;
                }
            default:
                if (se.browser.isFirefox() || se.browser.isEdge()) {
                    input ? document.execCommand(command, false, input) : document.execCommand(command);
                } else {
                    input ? document.execCommand(command, true, input) : document.execCommand(command, true);
                }
                break;
        }

        if (command === 'indent') {
            [...se.body.getElementsByTagName('blockquote')].forEach((bq) => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = bq.outerHTML;
                bq.replaceWith(wrapper);
            });
        }
    }

    /**
     * Ensures that the selection is within the body of the editor
     * @param {*} contentEditableElement 
     */
    ensureSelectionInBody(contentEditableElement) {
        if (contentEditableElement) {
          const selection = window.getSelection();
      
          // Check if the contentEditableElement has focus and the selection is within it
          if (document.activeElement !== contentEditableElement || !contentEditableElement.contains(selection.anchorNode)) {
            contentEditableElement.focus(); // Ensure the element has focus
      
            const range = document.createRange();
      
            if (contentEditableElement.childNodes.length > 0) {
              const lastChild = contentEditableElement.childNodes[contentEditableElement.childNodes.length - 1];
      
              if (lastChild.nodeType === Node.TEXT_NODE) {
                range.setStart(lastChild, lastChild.length);
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);
              } else {
                // If the last child is an element node, set the cursor after it.
                range.selectNodeContents(contentEditableElement);
                range.collapse(false); // Collapse to the end
                selection.removeAllRanges();
                selection.addRange(range);
              }
      
            } else {
              // If contenteditable is empty.
              range.selectNodeContents(contentEditableElement);
              range.collapse(false);
              selection.removeAllRanges();
              selection.addRange(range);
            }
          }
        }
      }
  
    /**
     * Inserts a node into the editor
     * @param {*} node
     * @param {*} range
     */
    insertNode(node, range) {
        const se = this;
        // Ensre that any selected contents is deleted before inserting
        range.deleteContents();
        range.insertNode(node);
        range.setStartAfter(node);

        se.setRange(range);
    }

    /**
     * Inserts images into the editor
     * @param {*} files
     * @returns
     */
    insertImages(files) {
        const se = this;
        
        console.log("Inserting images");
        se.ensureSelectionInBody(se.body);
        const currentRange = se.getRange();

        return new Promise((resolve) => {
            // Add busy class to striven editor
            se.editor.classList.add('se-image-uploading');
            se._isImageUploading = true;

            // Create a promise chain to insert each image in the files array only after the previous one is completed.
            // p = Promise.resolve() is used to start the chain with a resolved promise.
            let p = Promise.resolve();
            for (const file of files) {
                // Check if the file is an image
                if (!file.type.includes('image')) {
                    continue;
                }
                p = p.finally(() => se.insertImage(file, currentRange));
            }

            // Add the resolve to the end of the promise chain
            p.finally(() => {
                // Remove busy class
                se.editor.classList.remove('se-image-uploading');
                se._isImageUploading = false;

                // Check image overflow
                setTimeout(() => se.overflow(), 500);

                resolve();
            });
        });
    }

    /**
     * Inserts image into the editor, uploads to the server if imageUrl is provided otherwise uses data:image url
     * @param {*} file
     * @returns
     */
    insertImage(file, range) {
        const se = this;

        return new Promise((resolveImageInsert) => {
            const bodyWidth = se.body.offsetWidth;

            getImageDataURL(file)
                .then((imgDataUrl) => {
                    getImageDimensions(imgDataUrl)
                        .then(({ width, height }) => {
                            const { width: newWidth } = computeImageDimensions(width, height, bodyWidth);

                            if (se.options.imageUrl) {
                                //upload image if imageUrl is provided
                                se.getImage(imgDataUrl)
                                    .then((imageUrl) => {
                                        const img = createImageElement(imageUrl, newWidth);

                                        // Ensre that any selected contents is deleted before inserting
                                        se.insertNode(img, range);

                                        resolveImageInsert();
                                    })
                                    .catch(() => {
                                        // Create the image tag to insert
                                        const img = createImageElement(imgDataUrl, newWidth);
                                        img.setAttribute('data-data-url', 'true');

                                        // Ensre that any selected contents is deleted before inserting
                                        se.insertNode(img, range);

                                        resolveImageInsert();
                                    });
                            } else {
                                // Create the image tag to insert
                                // Create the image tag to insert
                                const img = createImageElement(imgDataUrl, newWidth);
                                img.setAttribute('data-data-url', 'true');

                                // Ensre that any selected contents is deleted before inserting
                                se.insertNode(img, range);

                                resolveImageInsert();
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            resolveImageInsert();
                        });
                })
                .catch((err) => {
                    console.error(err);
                    resolveImageInsert();
                });
        }).catch((err) => {
            console.error(err);
            resolveImageInsert();
        });
    }

    /**
     * handles click event to show image editing option and resize markers on an image placed in editor body
     * @param {*} e
     */
    handleImageClick(target) {
        const se = this;
        if (target.tagName === 'IMG') {
            const image = target;

            if (!image.nextElementSibling || image.nextElementSibling.className !== 'se-image-options') {
                let resizeHandles = [];
                let imageWrapper = image.parentElement;
                let imageRect = image.getBoundingClientRect();

                if (!imageWrapper.classList.contains('se-image-wrapper')) {
                    //wrapper not present, create one
                    imageWrapper = document.createElement('div');
                    imageWrapper.classList.add('se-image-wrapper');
                    imageWrapper.setAttribute('contenteditable', false);
                    imageWrapper.style.width = `${imageRect.width}px`;
                    imageWrapper.style.height = `${imageRect.height}px`;

                    image.parentElement.insertBefore(imageWrapper, image);
                    imageWrapper.appendChild(image);

                    //Add a div that shows resize marker
                    const resizeMarker = document.createElement('div');
                    resizeMarker.classList.add('resize-marker');
                    imageWrapper.appendChild(resizeMarker);

                    // Add resize handles (8 in total)
                    const positions = [
                        'top-left',
                        'top-middle',
                        'top-right',
                        'left-middle',
                        'right-middle',
                        'bottom-left',
                        'bottom-middle',
                        'bottom-right'
                    ];
                    positions.forEach((pos) => {
                        let handle = document.createElement('div');
                        resizeHandles.push(handle);
                        handle.classList.add('resize-handle', pos);
                        imageWrapper.appendChild(handle);

                        handle.addEventListener('mousedown', function (e) {
                            e.preventDefault();
                            se.startImageResize(e, resizeMarker, pos, image);
                        });

                        handle.addEventListener('touchstart', function (e) {
                            e.preventDefault();
                            se.startImageResize(e.touches[0], resizeMarker, pos, image);
                        });
                    });
                }

                const editImageMenu = document.createElement('span');
                editImageMenu.setAttribute('class', 'se-image-options');
                editImageMenu.setAttribute('contenteditable', false);
                editImageMenu.onclick = (e) => e.stopPropagation();
                image.after(editImageMenu);

                const changeOption = document.createElement('span');
                changeOption.textContent = 'Edit Image';
                changeOption.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    editImageMenu.remove();

                    image.classList.add('se-image-to-edit');
                    se.openImageMenu(true);

                    // Get from the data-data-url attribute whether this link is a data url. The data attribute will be true if it is
                    const isDataUrl = image.dataset.dataUrl;

                    const linkInputs = se.imageMenu.querySelectorAll('input');
                    // If the image is a data url, we need to disable the source input and not set the value
                    if (isDataUrl) {
                        // Disable the input
                        linkInputs[0].setAttribute('disabled', 'disabled');
                    } else {
                        // Enable the input
                        linkInputs[0].removeAttribute('disabled');
                        // Set the url of the image in the input
                        linkInputs[0].value = image.getAttribute('src');
                    }

                    linkInputs[1].value = image.getAttribute('alt');
                    linkInputs[2].value = image.getAttribute('title');
                    let imageWidth = parseFloat(image.getAttribute('width'));
                    if (isNaN(imageWidth)) {
                        // Get width from image element
                        imageWidth = image.clientWidth;
                    }

                    let imageHeight = parseFloat(image.getAttribute('height'));
                    if (isNaN(imageHeight)) {
                        // Get width from image element
                        imageHeight = image.clientHeight;
                    }

                    linkInputs[3].value = imageWidth;
                    linkInputs[4].value = imageHeight;

                    setTimeout(() => linkInputs[0].select(), 100);
                };

                editImageMenu.append(changeOption);

                // When user clicks anywhere but the image, remove the menu
                const optionHandler = (ev) => {
                    if (imageWrapper?.parentNode && ev.target !== image && ev.target !== imageWrapper && !resizeHandles.includes(ev.target)) {
                        imageWrapper.parentNode.replaceChild(image, imageWrapper);
                        window.removeEventListener('click', optionHandler);
                    }
                };

                window.addEventListener('click', optionHandler);

                // When user presses a key, remove the menu
                const keyPressHandler = () => {
                    if (imageWrapper?.parentNode) {
                        imageWrapper.parentNode.replaceChild(image, imageWrapper);
                    }
                    se.body.removeEventListener('keypress', keyPressHandler);
                };
                se.body.addEventListener('keypress', keyPressHandler);
            }
        }
    }

    startImageResize(e, resizeMarker, handlePosition, img) {
        const se = this;
        e.preventDefault && e.preventDefault();

        let startX = e.clientX;
        let startY = e.clientY;
        let startWidth = img.offsetWidth;
        let startHeight = img.offsetHeight;
        let startLeft = img.offsetLeft;
        let startTop = img.offsetTop;
        let aspectRatio = startWidth / startHeight; // Maintain original aspect ratio

        function mouseMoveHandler(e) {
            if (e.touches) e = e.touches[0];

            let deltaX = e.clientX - startX;
            let deltaY = e.clientY - startY;
            let newWidth, newHeight;

            //update position and dimension of resize marker to show the resize effect
            switch (handlePosition) {
                case 'top-left':
                case 'top-right':
                case 'bottom-left':
                case 'bottom-right':
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        newWidth = startWidth + (handlePosition.includes('left') ? -deltaX : deltaX);
                        newHeight = newWidth / aspectRatio;
                    } else {
                        newHeight = startHeight + (handlePosition.includes('top') ? -deltaY : deltaY);
                        newWidth = newHeight * aspectRatio;
                    }
                    break;
                case 'top-middle':
                    newHeight = startHeight - deltaY;
                    break;
                case 'bottom-middle':
                    newHeight = startHeight + deltaY;
                    break;
                case 'left-middle':
                    newWidth = startWidth - deltaX;
                    break;
                case 'right-middle':
                    newWidth = startWidth + deltaX;
                    break;
                default:
                    newWidth = startWidth;
                    newHeight = startHeight;
            }

            if (handlePosition.includes('top')) {
                resizeMarker.style.top = startTop + deltaY + 'px';
            }
            if (handlePosition.includes('left')) {
                resizeMarker.style.left = startLeft + deltaX + 'px';
            }
            resizeMarker.style.width = newWidth + 'px';
            resizeMarker.style.height = newHeight + 'px';
        }

        function mouseUpHandler() {
            //set properties of the image to the resized marker
            let resizedRect = resizeMarker.getBoundingClientRect();

            img.width = resizedRect.width;
            img.height = resizedRect.height;
            //reset the wrapper dimension if it's present
            let imageWrapper = img.parentElement;
            if (imageWrapper.classList.contains('se-image-wrapper')) {
                imageWrapper.style.width = `${img.width}px`;
                imageWrapper.style.height = `${img.height}px`;
            }

            //restore the marker back to the original position
            resizeMarker.style.left = 0;
            resizeMarker.style.top = 0;

            //recompute overflow style
            setTimeout(function () {
                se.overflow();
            }, 0);

            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        document.addEventListener('touchmove', mouseMoveHandler);
        document.addEventListener('mouseend', mouseUpHandler);
    }
}
