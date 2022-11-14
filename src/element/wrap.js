import {extend} from '../core';

extend('wrap', {
    set(html) {
        const element = document.createElement('div');
        element.outerHTML = html;
        this.replaceWith(element);
        element.append(this);
    },
});

extend('unwrap', {
    set() {
        this.replaceWith(...this.childNodes);
    },
});
