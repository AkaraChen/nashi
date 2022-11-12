import { extend } from '../core';
import { formatCSSKey } from './util';

extend('css', {
    get(key) {
        return this.style[formatCSSKey(key)];
    },
    set(key, value) {
        this.style[formatCSSKey(key)] = value;
    },
});

extend('style', {
    get(key) {
        return this.style[key];
    },
    set(key, value) {
        this.style[key] = value;
    },
});
