import {mixin, proxy} from '../core';

function forEach(handler) {
    for (const [index, item] of this.node.entries()) {
        handler(proxy(item), index, this);
    }
}

mixin('forEach', forEach);

mixin('each', forEach);

mixin('Symbol(Symbol.iterator)', function () {
    return function* () {
        for (let key of this.node) {
            yield proxy(key);
        }
    };
});

mixin('length', function () {
    return this.node.length;
});

mixin('first', function () {
    return proxy(this.node[0]);
});

mixin('last', function () {
    return proxy(this.node.at(-1));
});

mixin('at', function (index) {
    return proxy(this.node.at(index));
});

mixin('filter', function (filterFunction) {
    return proxy(
        this.node.filter((element, index) =>
            filterFunction(element, index, this)
        )
    );
});

mixin('find', function (findFunction) {
    return proxy(
        this.node.find((element, index) => findFunction(element, index, this))
    );
});

mixin('pop', function () {
    return proxy(this.node.pop());
});

mixin('shift', function () {
    return proxy(this.node.shift());
});

mixin('slice', function (start, end) {
    return proxy(this.node.slice(start, end));
});

mixin('splice', function (start, end, ...value) {
    return proxy(this.node.splice(start, end, ...value));
});
