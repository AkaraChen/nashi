import { extend, proxy } from '../core';

extend('next', {
    get() {
        return proxy(this.nextSibling);
    },
});

extend('prev', {
    get() {
        return proxy(this.previousSibling);
    },
});

extend('siblings', {
    get() {
        return proxy(
            Array.from(this.parentNode.childNodes).filter(
                (item) => item != this
            )
        );
    },
});

extend('index', {
    get() {
        return Array.from(this.parentNode.childNodes).indexOf(this);
    },
});
