import {alias, extend, proxy} from '../core';

extend('parent', {
    get() {
        if (this.parentNode === null) return;
        return proxy(this.parentNode);
    },
});

extend('child', {
    get() {
        const array = Array.from(this.childNodes);
        return proxy(array);
    },
});

alias('children', 'child');

extend('firstChild', {
    get() {
        const element = this.firstChild;
        return proxy(element);
    },
    set(queryResult) {
        // eslint-disable-next-line unicorn/no-null
        this.insertBefore(queryResult.node[0], this.childNodes[0] || null);
    },
});

extend('lastChild', {
    get() {
        const element = this.lastChild;
        return proxy(element);
    },
    set(queryResult) {
        this.append(queryResult.node[0]);
    },
});

extend('hasChild', {
    get() {
        return this.hasChildNodes();
    },
});

extend('empty', {
    set() {
        this.replaceChildren();
    },
});
