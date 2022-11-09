import { extend } from './core';

export function formatCSSKey(key) {
    let indexs = [];
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

export function event(event) {
    extend(event, {
        get() {
            this.dispatchEvent(new Event(event));
        },
        set(handler) {
            this.addEventListener(event, handler);
        },
    });
}
