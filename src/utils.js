/**
 * Constructs an SVG from a viewBox and d property
 * @param {Object} Object with viewBox and d property
 * @param {String} Fill color for the svg
 * @param {Number} Height of the SVG
 * @param {Width} Width of the SVG
 * @returns {HTMLElement} Returns SVG Element
 */
export const createSVG = (svgData, fillColor = '#000', height = 16, width = 16) => {
    const { viewBox, d } = svgData;
    const xmlns = 'http://www.w3.org/2000/svg';

    const icon = document.createElement('div');
    const svg = `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="${xmlns}">`;
    const path = `<path fill="${fillColor}" d="${d}"/>`;

    icon.innerHTML = `${svg}${path}</svg>`;

    return icon.querySelector('svg');
};

/**
 * Converts camel case string to a readable sentence
 * @param {String} text camel case string to convert
 * @returns {String} Readable sentence
 */
export const denormalizeCamel = (text) => {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

    return finalResult;
};

/**
 * Expand DOM element
 * @param {HTMLElement} el Element to expand
 * @param {String} bg Background color of expanded content
 * @param {Function} onExpand Handler function called when element is expanded
 */
export const blowUpElement = (el, bg = '#fff', onExpand) => {
    function reset() {
        el.dataset.expanded = 'false';
        el.style.height = null;
        el.style.overflow = null;
        el.style.position = null;
        el.style.top = null;
        el.style.bottom = null;
        el.style.left = null;
        el.style.right = null;
        el.style.backgroundColor = null;
        el.style.zIndex = null;
        el.oncollapse && el.oncollapse();
    }

    el.dataset.expanded = 'true';
    el.style.height = 'auto';
    el.style.overflow = 'auto';
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.bottom = '0';
    el.style.left = '0';
    el.style.right = '0';
    el.style.backgroundColor = bg;
    el.style.zIndex = '1050';

    onExpand && onExpand(el);
    el.collapse = () => reset();

    const escapeEvt = (e) => {
        if (e.key) {
            switch (e.key) {
                case 'Escape':
                    el.dataset.expanded === 'true' && reset();
                    break;
                default:
                    break;
            }
        } else {
            switch (e.keyCode) {
                case 13:
                    el.dataset.expanded === 'true' && reset();
                    break;
                default:
                    break;
            }
        }
    };

    window.addEventListener('keydown', escapeEvt);
    el.addEventListener('keydown', escapeEvt);
};
