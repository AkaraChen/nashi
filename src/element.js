import { extend, proxy } from './core';

extend('parent', {
    get() {
        return proxy(this.parentNode);
    },
});

extend('child', {
    get() {
        const array = [...this.childNodes];
        return proxy(array);
    },
});

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

extend('append', {
    set(queryResult) {
        for (const node of queryResult.node) {
            this.append(node);
        }
    },
});

extend('hasChild', {
    get() {
        return this.hasChildNodes();
    },
});

extend('before', {
    set(queryResult) {
        for (const node of queryResult.node) {
            this.parentNode.insertBefore(node, this);
        }
    },
});

extend('after', {
    set(queryResult) {
        for (const node of queryResult.node.reverse()) {
            this.parentNode.insertBefore(node, this.nextSibling);
        }
    },
});

extend('remove', {
    set() {
        this.remove();
    },
});

extend('index', {
    get() {
        return [...this.parentNode.childNodes].indexOf(this);
    },
});

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
            [...this.parentNode.childNodes].filter((item) => item != this)
        );
    },
});
