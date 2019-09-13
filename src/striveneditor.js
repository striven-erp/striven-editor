// Font Awesome Imports
import { library as faLib } from "@fortawesome/fontawesome-svg-core";
import { faFont } from "@fortawesome/free-solid-svg-icons/faFont";
import { faBold } from "@fortawesome/free-solid-svg-icons/faBold";
import { faItalic } from "@fortawesome/free-solid-svg-icons/faItalic";
import { faUnderline } from "@fortawesome/free-solid-svg-icons/faUnderline";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons/faStrikethrough";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faListOl } from "@fortawesome/free-solid-svg-icons/faListOl";
import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons/faAlignJustify";
import { faIndent } from "@fortawesome/free-solid-svg-icons/faIndent";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons/faAlignLeft";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons/faAlignCenter";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons/faAlignRight";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";

faLib.add(faFont);
faLib.add(faBold);
faLib.add(faItalic);
faLib.add(faUnderline);
faLib.add(faStrikethrough);
faLib.add(faList);
faLib.add(faListOl);
faLib.add(faListUl);
faLib.add(faAlignJustify);
faLib.add(faIndent);
faLib.add(faAlignLeft);
faLib.add(faAlignCenter);
faLib.add(faAlignRight);
faLib.add(faPaperclip);
faLib.add(faLink);
faLib.add(faImage);
faLib.add(faPaperPlane);

const EXTENSIONS = [
    ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".tif", ".jpeg",
    ".jpg", ".gif", ".bmp", ".txt", ".csv", ".png", ".msg", ".wav", ".mp3",
    ".mp4", ".zip", ".rtf", ".eps", ".ai", ".psd", ".avi", ".mov", ".wmv",
    ".cfg", ".wss", ".vsd", ".vsdx", ".tsd", ".lic"
];
const FONTPACK = "fas";
const OPTIONGROUPS = {
    textDecoration: {
        menu: "fa-font",
        group: [
            { bold: "fa-bold" },
            { italic: "fa-italic" },
            { underline: "fa-underline" },
            { strikethrough: "fa-strikethrough" }
        ]
    },
    listOptions: {
        menu: "fa-list",
        group: [
            { insertOrderedList: "fa-list-ol" },
            { insertUnorderedList: "fa-list-ul" }
        ]
    },
    textAlign: {
        menu: "fa-align-justify",
        group: [
            { indent: "fa-indent" },
            { justifyLeft: "fa-align-left" },
            { justifyCenter: "fa-align-center" },
            { justifyRight: "fa-align-right" }
        ]
    },
    attachments: {
        menu: "fa-paperclip",
        group: [
            { attachment: "fa-paperclip" },
            { link: "fa-link" },
            { image: "fa-image" }
        ]
    }
};

class StrivenEditor {
    constructor(el, options) {
        this.range = new Range();
        this.files = [];
        this.optionGroups = OPTIONGROUPS;

        if (options) {
            this.options = options;
            options.fontPack || (this.options.fontPack = FONTPACK);
            options.extensions || (this.options.extensions = EXTENSIONS);
        } else {
            this.options = {
                fontPack: FONTPACK,
                extensions: EXTENSIONS
            };
        }

        // MANUAL OVERIDE FOR OPEN SOURCE LAUNCH
        this.options.minimal = true;

        this.initEditor(el);
        this.initResponsive();
        this.initOverflow();
    }

    initEditor(el) {
        this.editor = el;
        this.toolbar = this.initToolbar();
        this.body = this.initBody();
        this.linkMenu = this.initLinkMenu();
        this.metaDataSection = this.initMetaDataSection();
        this.filesSection = this.initFilesSection();

        this.editor.style.border = "2px solid #ddd";
        this.editor.style.display = "flex";
        this.editor.style.flexDirection = "column";
        this.editor.style.position = "relative";
        this.editor.style.fontFamily = "Arial";

        this.toolbar.style.display = "flex";
        this.toolbar.style.justifyContent = "space-between";
        this.toolbar.style.alignItems = "center";
        this.toolbar.style.flexWrap = "wrap";
        this.toolbar.style.minHeight = this.options.toolbarHide ? "0" : "40px";

        this.toolbarOptionsGroup.style.margin = "0 10px";
        this.toolbarOptionsGroup.style.display = this.options.toolbarHide ? "none" : "flex";

        this.body.contentEditable = "true";
        this.body.style.outline = "none";
        this.body.style.padding = "10px 20px";

        this.body.style.height = this.editor.style.height;
        this.body.style.minHeight = this.editor.style.minHeight;
        this.body.style.maxHeight = this.editor.style.maxHeight;

        this.editor.style.height = "auto";
        this.editor.style.minHeight = "auto";
        this.editor.style.maxHeight = "auto";
        this.editor.style.maxWidth = "100%";

        if (this.options.toolbarHide) {
            this.toolbarSend.style.display = "none";
            this.toolbarOptionsGroup.style.display = "none";

            this.body.onfocus = () => {
                this.overflow();
                this.toolbarSlideUp();
            };

            this.body.onblur = () => {
                this.overflow();
                setTimeout(() => {
                    if (
                        document.activeElement !== this.body &&
                        document.activeElement !== linkMenuInput
                    ) {
                        this.toolbarSlideDown();
                    }
                }, 2000);
            };
        }

        this.linkMenu.dataset.active = "false";
        this.linkMenu.style.display = "none";
        this.linkMenu.style.position = "absolute";
        this.linkMenu.style.right = "10px";
        this.linkMenu.style.bottom = "10px";
        this.linkMenu.style.backgroundColor = "#fff";
        this.linkMenu.style.border = "2px solid #ddd";
        this.linkMenu.style.padding = "10px 20px";
        this.linkMenu.style.zIndex = "1000";

        const linkMenuContent = this.linkMenu.querySelector("div");
        const linkMenuLabel = linkMenuContent.querySelector("p");
        linkMenuLabel.style.width = "100%";
        linkMenuLabel.style.textAlign = "right";
        linkMenuLabel.style.marginRight = "10px";

        const linkMenuInput = linkMenuContent.querySelector("input");
        linkMenuInput.style.outline = "none";
        linkMenuInput.style.padding = "0 5px";
        linkMenuInput.placeholder = "Insert a Link";

        linkMenuContent.style.display = "flex";
        linkMenuContent.style.justifyContent = "space-between";
        linkMenuContent.style.margin = "5px 0";

        const linkMenuButton = this.linkMenu.querySelector("button");
        linkMenuButton.style.float = "right";
        linkMenuButton.style.padding = "6px 12px";
        linkMenuButton.style.border = "1px solid #4cae4c";
        linkMenuButton.style.backgroundColor = "#5cb85c";
        linkMenuButton.style.fontSize = "14px";
        linkMenuButton.style.color = "#fff";
        linkMenuButton.style.outline = "none";

        linkMenuButton.onmouseenter = () =>
            (linkMenuButton.style.backgroundColor = "#4cae4c");
        linkMenuButton.onmouseleave = () =>
            (linkMenuButton.style.backgroundColor = "#5cb85c");

        linkMenuButton.onclick = e => {
            const linkValue = linkMenuInput.value;

            if (linkValue) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);
                document.execCommand("createLink", true, linkValue);

                if (this.options.metaUrl && this.validURL(linkValue)) {
                    this.getMeta(linkValue).then(res => {
                        const { url, image, title, description } = res;
                        url &&
                            image &&
                            title &&
                            this.createMetaDataElement(url, image, title, description);
                    });
                }

                const bodyLinks = this.body.querySelectorAll("a");
                bodyLinks[bodyLinks.length - 1].contentEditable = "false";

                linkMenuInput.value = "";
                this.toolbar.querySelector("#toolbar-link").onclick();
            } else {
                this.body.focus();
                this.linkMenu.dataset.active = "false";
                e.target.parentElement.style.display = "none";
            }
        };

        this.toolbarSend.style.display = "none";
        this.toolbarSend.style.color = "#fff";
        this.toolbarSend.style.backgroundColor = "#5cb85c";
        this.toolbarSend.style.minHeight = this.options.toolbarHide
            ? "40px"
            : this.toolbar.style.minHeight;
        this.toolbarSend.style.width = "50px";
        this.toolbarSend.style.textAlign = "center";
        this.toolbarSend.style.justifyContent = "center";
        this.toolbarSend.style.alignContent = "center";
        this.toolbarSend.style.alignItems = "center";
        this.toolbarSend.style.cursor = "pointer";
        this.toolbarSend.style.border = "1px solid #4cae4c";
        this.toolbarSend.style.alignSelf = "flex-end";
        this.options.onToolbarSend && (this.toolbarSend.onclick = () => this.options.onToolbarSend());
        this.options.onToolbarSend && !this.options.toolbarHide && (this.toolbarSend.style.display = "flex");

        this.toolbarSend.onmouseenter = () =>
            (this.toolbarSend.style.backgroundColor = "#4cae4c");

        this.toolbarSend.onmouseleave = () =>
            (this.toolbarSend.style.backgroundColor = "#5cb85c");

        // Toolbar Options
        this.toolbarOptions.forEach(optionEl => {
            // Assign Styles
            optionEl.style.padding = "0 10px";
            optionEl.style.cursor = "pointer";
            optionEl.style.userSelect = "none";

            // Execute Toolbar Commands
            optionEl.onclick = e => {
                this.body.focus();

                const command = optionEl.id.split("-")[1];

                switch (command) {
                    case "insertOrderedList":
                        document.execCommand("indent", true);
                        document.execCommand(command, true);
                        break;
                    case "insertUnorderedList":
                        document.execCommand("indent", true);
                        document.execCommand(command, true);
                        break;
                    case "attachment":
                        const attachmentInput = document.createElement("input");
                        attachmentInput.style.display = "none";
                        attachmentInput.type = "file";
                        attachmentInput.click();
                        attachmentInput.onchange = e => this.attachFile(attachmentInput.files[0]);
                        break;
                    case "link":
                        if (this.linkMenu.dataset.active === "true") {
                            this.linkMenu.dataset.active = "false";
                            this.linkMenu.style.display = "none";
                        } else {
                            this.linkMenu.dataset.active = "true";
                            this.linkMenu.style.display = "block";

                            this.range = this.getRange();
                            linkMenuInput.focus();
                        }
                        break;
                    default:
                        document.execCommand(command, true);
                        break;
                }
            };
        });

        // Paste Handler
        this.body.onpaste = e => {
            function dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }

                const file = new File([u8arr], filename, { type: mime });
                return new File([u8arr], `${file.name}.${file.type.split('/').pop()}`, { type: file.type });
            }

            const convertImage = file =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });

            if (
                e.clipboardData.files.length > 0 &&
                e.clipboardData.files[0].type.includes("image")
            ) {
                convertImage(e.clipboardData.files[0]).then(res => {
                    document.execCommand("insertImage", true, res);
                    this.attachFile(dataURLtoFile(res, "pastedimage"));
                    this.overflow();
                });
            }

            if (
                e.clipboardData.items.length > 0 &&
                e.clipboardData.items[0].type === "text/plain"
            ) {
                e.clipboardData.items[0].getAsString(string => {
                    if (this.options.metaUrl && this.validURL(string)) {
                        this.getMeta(string).then(res => {
                            const { url, title, image, description } = res;
                            url &&
                                title &&
                                image &&
                                this.createMetaDataElement(url, image, title, description);
                        });
                    }
                });
            }

            this.overflow();
        };

        // Get Content from Editor
        this.editor.getcontent = () => this.getContent();

        // Get Editor Range
        this.editor.getrange = () => this.getRange();

        this.editor.appendChild(this.toolbar);
        this.editor.appendChild(this.body);
        this.editor.appendChild(this.linkMenu);
        this.editor.appendChild(this.metaDataSection);
        this.editor.appendChild(this.filesSection);

        // Reposition Toolbar
        if (this.options.toolbarBottom) {
            this.editor.removeChild(this.toolbar);
            this.editor.append(this.toolbar);
        }
    }

    toolbarSlideUp() {
        const that = this;

        let height = 0;
        let id = setInterval(frame, 5);

        function frame() {
            if (height === 40) {
                that.options.onToolbarSend && (that.toolbarSend.style.display = "flex");
                that.toolbarOptionsGroup.style.display = "flex";
                clearInterval(id);
            } else {
                height++;
                that.toolbar.style.minHeight = `${height}px`;
            }
        }
    }

    toolbarSlideDown() {
        const that = this;

        this.options.onToolbarSend && (this.toolbarSend.style.display = "none");
        this.toolbarOptionsGroup.style.display = "none";

        let height = 40;
        let id = setInterval(frame, 5);
        function frame() {
            if (height === 0) {
                clearInterval(id);
            } else {
                height--;
                that.toolbar.style.minHeight = `${height}px`;
            }
        }
    }

    initToolbar() {
        const toolbar = document.createElement("div");
        this.toolbarOptionsGroup = document.createElement("div");
        const groups = Object.keys(this.optionGroups);

        toolbar.classList.add("toolbar");
        this.toolbarOptionsGroup.classList.add("toolbar-options");

        //iterate groups
        groups.forEach((group) => {
            // add menu to toolbarOptions
            const toolbarMenu = document.createElement("div");
            const toolbarMenuIcon = document.createElement("i");

            toolbarMenu.classList.add("toolbar-menu");
            toolbarMenu.id = `menu-${group}`;
            toolbarMenuIcon.classList.add(this.options.fontPack);
            toolbarMenuIcon.classList.add(this.optionGroups[group].menu);

            this.toolbarOptionsGroup.appendChild(toolbarMenu);

            // add group to toolbarOptions
            const toolbarGroup = document.createElement("div");

            toolbarGroup.classList.add("toolbar-group");
            toolbarGroup.id = `group-${group}`;

            this.optionGroups[group].group.forEach((option) => {
                const optionSpan = document.createElement("span");
                const optionIcon = document.createElement("i");

                const toolbarCommand = Object.keys(option)[0];

                optionSpan.id = `toolbar-${toolbarCommand}`;
                optionIcon.classList.add(this.options.fontPack);
                optionIcon.classList.add(option[toolbarCommand]);

                optionSpan.appendChild(optionIcon);
                toolbarGroup.appendChild(optionSpan);
            })

            this.toolbarOptionsGroup.appendChild(toolbarGroup);
        })

        toolbar.appendChild(this.toolbarOptionsGroup);

        //add toolbar-send
        const toolbarSend = document.createElement("div");
        const toolbarSendIcon = document.createElement("i");
        toolbarSend.id = "toolbar-send";
        toolbarSendIcon.classList.add(this.options.fontPack);
        toolbarSendIcon.classList.add("fa-paper-plane");

        toolbarSend.appendChild(toolbarSendIcon);
        toolbar.appendChild(toolbarSend);

        this.toolbarOptions = toolbar.querySelectorAll("span");
        this.toolbarGroups = [...toolbar.getElementsByClassName("toolbar-group")];
        this.toolbarMenus = [...toolbar.getElementsByClassName("toolbar-menu")];
        this.toolbarSend = toolbar.querySelector("#toolbar-send");

        return toolbar;
    }

    initBody() {
        const body = document.createElement("div");
        body.classList.add("body");

        return body;
    }

    initLinkMenu() {
        const linkMenu = document.createElement("div");
        const linkMenuForm = document.createElement("div");
        const linkMenuButton = document.createElement("button");
        const linkMenuFormLabel = document.createElement("p");
        const linkMenuFormInput = document.createElement("input");

        linkMenu.id = "link-menu";
        linkMenuButton.textContent = "Insert Link";
        linkMenuFormLabel.textContent = "Web Address";
        linkMenuFormInput.type = "text";

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);

        linkMenu.appendChild(linkMenuForm);
        linkMenu.appendChild(linkMenuButton);

        return linkMenu;
    }

    initMetaDataSection() {
        const metaDataSection = document.createElement("div");
        metaDataSection.classList.add("metadata-section");

        metaDataSection.style.display = "flex";
        metaDataSection.style.flexWrap = "wrap";
        metaDataSection.style.zIndex = "500";

        return metaDataSection;
    }

    initFilesSection() {
        const filesSection = document.createElement("div");
        filesSection.classList.add("files-section");

        filesSection.style.display = "flex";
        filesSection.style.flexWrap = "wrap";
        filesSection.style.zIndex = "500";

        this.body.ondragenter = e => {
            this.body.style.backgroundColor = "#ddd";
        }

        this.body.ondragleave = e => {
            this.body.style.backgroundColor = "inherit";
        }

        this.body.ondrop = e => {
            this.body.style.backgroundColor = "inherit";
            e.preventDefault();

            const file = (e.dataTransfer.files && e.dataTransfer.files[0]);
            this.attachFile(file);
        }

        this.editor.getfiles = () => this.getFiles();
        return filesSection;
    }

    createFileElement(name, size) {
        const fileEl = document.createElement("div");
        const fileNameEl = document.createElement("h6");
        const fileSizeEl = document.createElement("p");
        const removeFileEl = document.createElement("p");

        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = "X";

        fileEl.dataset.fileindex = (this.files.length - 1);
        fileEl.style.width = "100%";
        fileEl.style.display = "flex";
        fileEl.style.flexDirection = "column";
        fileEl.style.margin = "10px";
        fileEl.style.position = "relative";

        fileNameEl.style.fontWeight = "bold";
        fileNameEl.style.margin = "0";
        fileSizeEl.style.fontSize = "12px";
        fileSizeEl.style.margin = "2px 0";

        removeFileEl.style.userSelect = "none";
        removeFileEl.style.color = "black";
        removeFileEl.style.position = "absolute";
        removeFileEl.style.right = "5px";
        removeFileEl.style.top = "-5px";
        removeFileEl.style.cursor = "pointer";
        removeFileEl.style.backgroundColor = "#fff";
        removeFileEl.onmouseenter = () => removeFileEl.style.color = "#ddd";
        removeFileEl.onmouseleave = () => removeFileEl.style.color = "black";

        removeFileEl.onclick = e => {
            this.files.splice(e.target.parentElement.dataset.fileindex, 1);
            e.target.parentElement.remove();
        }

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);

        this.filesSection.appendChild(fileEl);
        this.editor.getfiles = () => this.getFiles();
    }

    createMetaDataElement(url, img, title, description) {
        const metaItemEl = document.createElement("div");
        const metaLinkEl = document.createElement("a");
        const metaImageEl = document.createElement("img");
        const metaDataEl = document.createElement("div");
        const metaDataTitleEl = document.createElement("h6");
        const metaDataDescriptionEl = document.createElement("p");
        const removeMetaDataEl = document.createElement("span");

        metaLinkEl.href = url;
        metaImageEl.src = img;
        metaDataTitleEl.textContent = title;
        metaDataDescriptionEl.textContent = description;
        removeMetaDataEl.textContent = "X";

        metaLinkEl.target = "blank";

        metaItemEl.style.width = "100%";
        metaItemEl.style.display = "flex";
        metaItemEl.style.margin = "10px";
        metaItemEl.style.position = "relative";

        metaImageEl.style.marginRight = "10px";
        metaImageEl.style.height = "50px";
        metaImageEl.style.width = "75px";

        metaDataTitleEl.style.fontWeight = "bold";
        metaDataTitleEl.style.margin = "0";
        metaDataDescriptionEl.style.margin = "0";

        removeMetaDataEl.style.userSelect = "none";
        removeMetaDataEl.style.color = "black";
        removeMetaDataEl.style.position = "absolute";
        removeMetaDataEl.style.right = "5px";
        removeMetaDataEl.style.top = "-5px";
        removeMetaDataEl.style.cursor = "pointer";
        removeMetaDataEl.style.backgroundColor = "#fff";
        removeMetaDataEl.onmouseenter = () => removeMetaDataEl.style.color = "#ddd";
        removeMetaDataEl.onmouseleave = () => removeMetaDataEl.style.color = "black";

        removeMetaDataEl.onclick = e => e.target.parentElement.remove();

        metaLinkEl.appendChild(metaImageEl);

        metaDataEl.appendChild(metaDataTitleEl);
        metaDataEl.appendChild(metaDataDescriptionEl);

        metaItemEl.appendChild(metaLinkEl);
        metaItemEl.appendChild(metaDataEl);
        metaItemEl.appendChild(removeMetaDataEl);

        this.metaDataSection.appendChild(metaItemEl);
    }

    initResponsive() {
        const that = this;

        if (!this.options.minimal) {
            let responsive = window.matchMedia("(max-width: 700px)").matches;

            function responsiveGroups(isResponsive) {

                that.toolbarGroups.forEach(group => {
                    group.dataset.open = "false";
                    group.style.display = isResponsive ? "none" : "block";
                    group.style.position = isResponsive ? "absolute" : "relative";
                    group.style.bottom = isResponsive ? "5px" : "inherit";
                    group.style.right = isResponsive ? "5px" : "inherit";
                    group.style.backgroundColor = isResponsive ? "#fff" : "inherit";
                    group.style.border = isResponsive ? "2px solid black" : "none";
                });

                that.toolbarMenus.forEach(menu => {
                    function toggleMenu() {
                        const selectedGroup = that.toolbar.querySelector(
                            `#group-${menu.id.split("-")[1]}`
                        );

                        if (selectedGroup.dataset.open === "false") {
                            that.toolbarGroups.forEach(group => {
                                if (group.dataset.open === "true") {
                                    group.style.display = "none";
                                    group.dataset.open = "false";
                                }
                            });

                            selectedGroup.style.display = "block";
                            selectedGroup.dataset.open = "true";
                        } else {
                            selectedGroup.style.display = "none";
                            selectedGroup.dataset.open = "false";
                        }
                    }

                    menu.style.padding = "0 10px";
                    menu.style.cursor = "pointer";
                    menu.style.userSelect = "none";

                    menu.style.display = isResponsive ? "block" : "none";
                    menu.onclick = e => toggleMenu();
                });
            }

            function setResponsive() {
                responsive = window.matchMedia("(max-width: 700px)").matches;
                responsiveGroups(responsive);
            }

            setResponsive();
            window.onresize = () => setResponsive();
        } else {
            this.toolbarMenus.forEach(menu => (menu.style.display = "none"));
            this.toolbar.querySelector("#toolbar-strikethrough").style.display = "none";
            this.toolbar.querySelector("#toolbar-image").style.display = "none";
            this.toolbar.querySelector("#toolbar-insertOrderedList").style.display =
                "none";
            this.toolbar.querySelector("#group-textAlign").style.display = "none";
        }
    }

    initOverflow() {
        const onFocus = this.body.onfocus;
        this.body.onfocus = () => {
            onFocus && onFocus();
            this.overflow();
        }

        const onBlur = this.body.onblur;
        this.body.onblur = () => {
            onBlur && onBlur();
            this.overflow();
        };

        this.body.onkeypress = () => this.overflow();
    }

    getFiles() {
        return this.files;
    }

    getContent() {
        return this.body.innerHTML;
    }

    getRange() {
        return window.getSelection().getRangeAt(0);
    }

    getMeta(url) {
        return fetch(this.options.metaUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetUrl: url })
        }).then((res) => res.json())
    }

    validURL(str) {
        var pattern = new RegExp(
            "^(https?:\\/\\/)?" +
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
            "((\\d{1,3}\\.){3}\\d{1,3}))" +
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
            "(\\?[;&a-z\\d%_.~+=-]*)?" +
            "(\\#[-a-z\\d_]*)?$",
            "i"
        );
        return !!pattern.test(str);
    }

    overflow() {
        const body = this.body;
        body.scrollHeight > body.clientHeight
            ? (body.style.overflowY = "scroll")
            : (body.style.overflowY = "hidden");
        body.scrollWidth > body.clientWidth
            ? (body.style.overflowX = "scroll")
            : (body.style.overflowX = "hidden");
    }

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    validateFile(file) {
        const extension = file.type.split('/').pop();
        return this.options.extensions.includes(`.${extension}`);
    }

    attachFile(file) {
        if (this.validateFile(file)) {
            this.files.push(file);
            this.createFileElement(file.name, this.formatBytes(file.size));
        } else {
            this.fileInvalid();
        }
    }

    fileInvalid() {
        this.body.style.transition = "background-color .5s";
        this.body.style.backgroundColor = "#d9534f";
        setTimeout(() => {
            this.body.style.backgroundColor = "inherit";
            setTimeout(() => this.body.style.transition = "none", 500);
        }, 500);
    }
}

export default StrivenEditor;