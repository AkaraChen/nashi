import { extend } from '../core';

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
