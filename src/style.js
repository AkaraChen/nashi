import { extend } from './core';
import { formatCSSKey } from './helper';

extend('width', {
    get: function get() {
        return this.offsetWidth;
    },
});

extend('height', {
    get: function get() {
        return this.offsetHeight;
    },
});

extend('innerWidth', {
    get: function get() {
        return this.clientWidth;
    },
});

extend('innerHeight', {
    get: function get() {
        return this.clientHeight;
    },
});

extend('css', {
    get: function get(key) {
        return this.style[formatCSSKey(key)];
    },
    set: function set(key, value) {
        this.style[formatCSSKey(key)] = value;
    },
});

extend('style', {
    get: function get(key) {
        return this.style[key];
    },
    set: function set(key, value) {
        this.style[key] = value;
    },
});
