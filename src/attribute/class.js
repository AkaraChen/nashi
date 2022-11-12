import {extend} from '../core';

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
