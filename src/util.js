import { util, proxy } from './core';

util('create', function (tag) {
    return proxy(document.createElement(tag));
});

util('fromHTML', function (html) {
    const document = new DOMParser().parseFromString(html, 'text/html');
    return proxy(document.body.childNodes);
});

util('merge', function (...args) {
    const nodes = [];
    for (let arg of args) {
        arg.node.forEach((item) => nodes.push(item));
    }
    return proxy(nodes);
});
