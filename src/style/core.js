import {extend} from '../core';
import {formatCSSKey} from './util';

extend('css', {
    get(key) {
        return getComputedStyle(this).getPropertyValue(key);
    },
    set(key, value) {
        this.style[formatCSSKey(key)] = value;
    },
});

extend('style', {
    get(key) {
        return getComputedStyle(this).getPropertyValue(key);
    },
    set(key, value) {
        this.style[key] = value;
    },
});
