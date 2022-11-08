import { extend, get } from './core';
import { formatCSSKey } from './helper';

get('width', 'offsetWidth');
get('height', 'offsetHeight');
get('innerWidth', 'clientWidth');
get('innerHeight', 'clientHeight');

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
