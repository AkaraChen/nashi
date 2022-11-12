import { extend } from '../core';

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
        return this.getAttribute('draggable');
    },
    set(value) {
        return this.setAttribute('draggable', value.toString());
    },
});
