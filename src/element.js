import { extend, proxy } from './core';

extend('parent', {
    get: function get() {
        return proxy(this.parentNode);
    },
});

extend('child', {
    get: function get() {
        const arr = Array.from(this.childNodes);
        return proxy(arr);
    },
});

extend('firstChild', {
    get: function get() {
        const element = this.firstChild;
        return proxy(element);
    },
    set: function set(queryResult) {
        this.insertBefore(queryResult.node[0], this.childNodes[0] || null);
    },
});

extend('lastChild', {
    get: function get() {
        const element = this.lastChild;
        return proxy(element);
    },
    set: function set(queryResult) {
        this.appendChild(queryResult.node[0]);
    },
});

extend('append', {
    set: function set(queryResult) {
        queryResult.node.forEach((node) => {
            this.appendChild(node);
        });
    },
});

extend('hasChild', {
    get: function get() {
        return this.hasChildNodes();
    },
});

extend('before', {
    set: function set(queryResult) {
        queryResult.node.forEach((node) => {
            this.parentNode.insertBefore(node, this);
        });
    },
});

extend('after', {
    set: function set(queryResult) {
        queryResult.node.reverse().forEach((node) => {
            this.parentNode.insertBefore(node, this.nextSibling);
        });
    },
});

extend('remove', {
    set: function set() {
        this.remove();
    },
});

extend('index', {
    get: function get() {
        return Array.from(this.parentNode.childNodes).indexOf(this);
    },
});

extend('next', {
    get: function get() {
        return proxy(this.nextSibling);
    },
});

extend('prev', {
    get: function get() {
        return proxy(this.previousSibling);
    },
});

extend('siblings', {
    get: function get() {
        return proxy(
            Array.from(this.parentNode.childNodes).filter(
                (item) => item != this
            )
        );
    },
});
