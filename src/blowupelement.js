export default function blowUpElement(el, bg = '#fff', onExpand) {
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

    window.addEventListener('keydown', (e) => {
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
    })
}
