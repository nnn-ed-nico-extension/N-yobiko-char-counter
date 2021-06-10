/**
 * Simple createElement
 * @param {String} tag Element tag
 * @param {String[] || String} classes Classes of element
 * @param {Array[]} attrs Attrs of element
 * @param {ElementCreationOptions} [option] 
 * @returns {HTMLElement}
 */
export default function (tag, classes=[], attrs=[], option) {
    const el = document.createElement(tag, option);

    if (typeof classes === 'string')
        el.classList.add(classes);
    else
        el.classList.add(...classes);

    for (const attr of attrs) el.setAttribute(attr[0], attr[1]);
    return el;
}
