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

extend('prop', {
    get(key) {
        return this.getAttribute(key);
    },
    set(key, value) {
        this.setAttribute(key, value);
    },
});

extend('html', {
    get() {
        return this.innerHTML;
    },
    set(html) {
        this.innerHTML = html;
    },
});
