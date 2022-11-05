import { extend, proxy, QueryResult, util } from './core';

extend('parent', {
    get: function get() {
        return this.parentNode;
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
        this.insertBefore(queryResult.node[0], this.childNodes[0]);
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

util('create', function (tag) {
    return proxy(document.createElement(tag));
});

util('fromHTML', function (html) {
    const document = new DOMParser().parseFromString(html, 'text/html');
    return proxy(document.body.childNodes);
});
