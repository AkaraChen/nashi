import {extend} from '../core';

extend('wrap', {
    set() {
        const element = document.createElement('div');
        this.replaceWith(element);
        element.append(this);
    },
});

extend('unwrap', {
    set() {
        this.replaceWith(...this.childNodes);
    },
});
