import {mixin, proxy} from '../core';

function forEach(handler) {
    for (const [index, item] of this.node.entries()) {
        handler(proxy(item), index, this);
    }
}

function* iterator() {
    for (let key of this.node) {
        yield proxy(key);
    }
}

mixin('forEach', forEach);

mixin('each', forEach);

mixin('Symbol(Symbol.iterator)', function () {
    return iterator;
});

mixin('length', function () {
    return this.node.length;
});

mixin('first', function () {
    return () => proxy(this.node[0]);
});

mixin('last', function () {
    return () => proxy(this.node.at(-1));
});

mixin('at', function () {
    return (index) => proxy(this.node.at(index));
});

mixin('filter', function () {
    return (filterFunction) =>
        proxy(
            this.node.filter((element, index) =>
                filterFunction(proxy(element), index, proxy(this.node))
            )
        );
});

mixin('find', function () {
    return (findFunction) =>
        proxy(
            this.node.find((element, index) =>
                findFunction(proxy(element), index, proxy(this.node))
            )
        );
});

mixin('pop', function () {
    return () => proxy(this.node.pop());
});

mixin('shift', function () {
    return () => proxy(this.node.shift());
});

mixin('slice', function () {
    return (start, end) => proxy(this.node.slice(start, end));
});

mixin('splice', function () {
    return (start, end, ...value) =>
        proxy(this.node.splice(start, end, ...value));
});
