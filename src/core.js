export class QueryResult {
    constructor(args) {
        if (typeof args === 'string') {
            this.node = Array.from(document.querySelectorAll(args));
            return;
        }
        if (Array.isArray(args)) {
            this.node = this.node;
            return;
        }
        this.node = args;
    }
}

export const extend = (key, obj) => {
    QueryResult.prototype[key] = obj;
};

extend('text', function text(string) {
    this.innerText = string;
});

extend('class', {
    add(...className) {
        className.forEach((item) => {
            this.classList.add(item);
        });
    },
});

export const core = (selector) => {
    const queryResult = new QueryResult(selector);
    return new Proxy(queryResult, {
        get: (target, prop, receiver) => {
            const globalReceiver = receiver;
            if (typeof target[prop] === 'function') {
                return (...argument) => {
                    target.node.forEach((item) =>
                        target[prop].apply(item, argument)
                    );
                    return globalReceiver;
                };
            }
            if (typeof target[prop] === 'object') {
                return new Proxy(target[prop], {
                    get: (target, prop) => {
                        if (typeof target[prop] === 'function') {
                            return (...argument) => {
                                queryResult.node.forEach((item) =>
                                    target[prop].apply(item, argument)
                                );
                                return globalReceiver;
                            };
                        }
                    },
                });
            }
            return Reflect.get(target, prop);
        },
    });
};
