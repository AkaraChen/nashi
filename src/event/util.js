import {extend} from '../core';

export function event(name) {
    extend(name, {
        get() {
            this.dispatchEvent(new Event(name));
        },
        set(handler) {
            this.addEventListener(name, handler);
        },
    });
}
