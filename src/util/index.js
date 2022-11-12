import {util, proxy} from '../core';

util('create', (tag) => proxy(document.createElement(tag)));

util('fromHTML', (html) => {
    const document = new DOMParser().parseFromString(html, 'text/html');
    return proxy(document.body.childNodes);
});

util('merge', (...arguments_) => {
    const nodes = [];
    for (const argument of arguments_) {
        for (const item of argument.node) nodes.push(item);
    }

    return proxy(Array.from(new Set(nodes)));
});

util(
    'equal',
    (first, second) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        [first.node, second.node].reduce((a, b) =>
            a.filter((c) => !b.includes(c))
        ).length === 0
);

util('clone', (queryResult) => {
    const newNode = queryResult.node.slice();
    return proxy(newNode);
});
