import { extend, proxy, QueryResult, util } from './core';

extend('parent', {
    get: function get() {
        return this.parentNode;
    },
});

extend('child', {
    get: function get() {
        const arr = Array.from(this.childNodes);
        const queryResult = new QueryResult(arr);
        return proxy(queryResult);
    },
});

extend('firstChild', {
    get: function get() {
        const element = this.firstChild;
        const queryResult = new QueryResult(element);
        return proxy(queryResult);
    },
    set: function set(queryResult) {
        this.insertBefore(queryResult.node[0], this.childNodes[0]);
    },
});

extend('lastChild', {
    get: function get() {
        const element = this.lastChild;
        const queryResult = new QueryResult(element);
        return proxy(queryResult);
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

extend('insertBefore', {
    set: function set(queryResult) {
        queryResult.node.forEach((node) => {
            this.parentNode.insertBefore(node, this);
        });
    },
});

extend('insertAfter', {
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

util(function create(tag) {
    return proxy(new QueryResult(document.createElement(tag)));
});
