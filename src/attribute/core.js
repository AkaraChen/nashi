import { extend } from '../core';

extend('attr', {
    get(key) {
        return this.getAttribute(key);
    },
    set(key, value) {
        this.setAttribute(key, value);
    },
});

extend('prop', {
    get(key) {
        return this[key];
    },
    set(key, value) {
        this[key] = value;
    },
});
