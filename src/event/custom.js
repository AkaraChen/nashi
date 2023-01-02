import { extend } from '../core';

extend('hover', {
    set(enterHandler, leaveHander = enterHandler) {
        this.addEventListener('mouseenter', enterHandler);
        this.addEventListener('mouseleave', leaveHander);
    }
});

extend('pointerhover', {
    set(enterHandler, leaveHander = enterHandler) {
        this.addEventListener('pointerenter', enterHandler);
        this.addEventListener('pointerleave', leaveHander);
    }
});
