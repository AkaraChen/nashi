import { extend } from './core';

extend('text', {
    get: function get() {
        return this.innerText;
    },
    set: function set(string) {
        this.innerText = string;
    },
});

extend('class', {
    get: function get() {
        return this.className;
    },
    set: function set(className) {
        this.className = className;
    },
});

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
