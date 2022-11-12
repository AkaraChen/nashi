import { extend, alias } from '../core';

extend('event', {
    set(event, handler) {
        this.addEventListener(event, handler);
    },
});

alias('on', 'event');

extend('trigger', {
    set(event) {
        if (typeof event === 'string') {
            event = new Event(event);
        }

        this.dispatchEvent(event);
    },
});

extend('removeEvent', {
    set(event, handler) {
        this.removeEventListener(event, handler);
    },
});
