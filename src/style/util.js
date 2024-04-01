import { extend } from '../core';

export function formatCSSKey(key) {
    const indexs = [];
    let position = key.indexOf('-');
    while (position !== -1) {
        indexs.push(position);
        position = key.indexOf('-', position + 1);
    }

    const array = [...key];
    for (const index of indexs) {
        array[index] = ' ';
        array[index + 1] = array[index + 1].toUpperCase();
    }
    return array.join('').replaceAll(' ', '');
}

export function styleAlias(name, property = name) {
    extend(name, {
        get() {
            return getComputedStyle(this)[property];
        },
        set(value) {
            this.style[property] = value;
        }
    });
}
