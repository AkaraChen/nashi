import {extend} from '../core';

extend('append', {
    set(queryResult) {
        for (const node of queryResult.node) {
            this.append(node);
        }
    }
});

extend('before', {
    set(queryResult) {
        for (const node of queryResult.node) {
            this.parentNode.insertBefore(node, this);
        }
    }
});

extend('after', {
    set(queryResult) {
        for (const node of queryResult.node.reverse()) {
            this.parentNode.insertBefore(node, this.nextSibling);
        }
    }
});

extend('remove', {
    set() {
        this.remove();
    }
});
