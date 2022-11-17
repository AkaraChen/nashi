import {extend} from '../core';

extend('wrap', {
    set(tag) {
        const div = document.createElement(tag);
        this.parentElement.insertBefore(div, this);
        div.append(this);
    }
});

extend('unwrap', {
    set() {
        this.replaceWith(...this.childNodes);
    }
});
