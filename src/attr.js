import { extend, bind } from './core';

bind('text', 'innerText');
bind('class', 'className');
bind('id', 'id');
bind('html', 'innerHTML');

extend('addClass', {
    set: function set(className) {
        this.classList.add(className);
    },
});

extend('removeClass', {
    set: function set(className) {
        this.classList.remove(className);
    },
});

extend('hasClass', {
    get: function (className) {
        return this.classList.contains(className);
    },
});

extend('toggleClass', {
    set: function (className) {
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
