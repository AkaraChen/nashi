import { extend, bind } from './core';

bind('text', 'innerText');
bind('class', 'className');
bind('id', 'id');
bind('html', 'innerHTML');

extend('addClass', {
    set(className) {
        this.classList.add(className);
    },
});

extend('removeClass', {
    set(className) {
        this.classList.remove(className);
    },
});

extend('hasClass', {
    get(className) {
        return this.classList.contains(className);
    },
});

extend('toggleClass', {
    set(className) {
        this.classList.toggle(className);
    },
});

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
