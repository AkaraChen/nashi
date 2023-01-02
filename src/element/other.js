import { convertBoolean } from './util';
import { extend } from '../core';

extend('show', {
    set() {
        this.style.display = '';
    }
});

extend('hide', {
    set() {
        this.style.display = 'none';
    }
});

extend('toggle', {
    set() {
        this.style.display = this.style.display === 'none' ? '' : 'none';
    }
});

extend('draggable', {
    get() {
        return convertBoolean(this.getAttribute('draggable'));
    },
    set(value) {
        return this.setAttribute('draggable', convertBoolean(value));
    }
});

extend('replace', {
    set(html) {
        this.outerHTML = html;
    }
});

extend('tag', {
    get() {
        return this.tagName.toLowerCase();
    }
});
