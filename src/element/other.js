import { extend } from '../core';
import { convertBoolean } from './util';

extend('show', {
    set() {
        this.style.display = '';
    },
});

extend('hide', {
    set() {
        this.style.display = 'none';
    },
});

extend('toggle', {
    set() {
        this.style.display = this.style.display === 'none' ? '' : 'none';
    },
});

extend('draggable', {
    get() {
        return convertBoolean(this.getAttribute('draggable'));
    },
    set(value) {
        return this.setAttribute('draggable', convertBoolean(value));
    },
});
