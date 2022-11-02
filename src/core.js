import { warn } from './log';

export class QueryResult {
    #setNode = function (args) {
        this.node = [];
        if (typeof args === 'undefined') {
            warn('Invalid args');
            return;
        }
        if (typeof args === 'string') {
            this.node = Array.from(document.querySelectorAll(args));
            return;
        }
        // 判断是数组或者类数组（HTMLCollection 之流）
        if (args[Symbol.iterator]) {
            for (const item of args) {
                if (item instanceof Node) {
                    this.node.push(item);
                }
            }
            return;
        }
        if (args instanceof Node) {
            this.node.push(args);
            return;
        }
        warn('Invalid args');
    };
    #iterator = function () {
        let index = 0;
        return {
            next: {
                value: index++,
                done: index > this.node.length,
            },
        };
    };
    constructor(args) {
        this.#setNode(args);
        this[Symbol.iterator] = this.#iterator;
    }
}

QueryResult.prototype.get = {};

export const extend = (key, handler, get) => {
    QueryResult.prototype[key] = handler;
    if (get) QueryResult.prototype.get[key] = get;
};

const proxy = (queryResult) =>
    new Proxy(queryResult, {
        get: (target, prop, receiver) => {
            // 最外层的 Proxy 对象，用于实现链式编程
            const globalReceiver = receiver;
            if (!Number.isNaN(Number(prop))) {
                return proxy(new QueryResult(queryResult.node[prop]));
            }
            if (typeof target[prop] === 'function') {
                return new Proxy(target[prop], {
                    apply: (target, _thisArg, argumentsList) => {
                        if (argumentsList.length === 0) {
                            return queryResult.get[prop].apply(
                                queryResult.node[0]
                            );
                        }
                        queryResult.node.forEach((item) => {
                            target.call(item, argumentsList);
                        });
                        return globalReceiver;
                    },
                });
            }
            return Reflect.get(target, prop);
        },
    });

export const core = (selector) => {
    const queryResult = new QueryResult(selector);
    return proxy(queryResult);
};
