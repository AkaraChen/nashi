import { extend } from '../core';

extend('hover', {
    set(handler) {
        this.addEventListener('mouseenter', handler);
        this.addEventListener('mouseleave', handler);
    },
});
