import {extend} from '../core';

extend('unwrap', {
    set() {
        this.replaceWith(...this.childNodes);
    },
});
