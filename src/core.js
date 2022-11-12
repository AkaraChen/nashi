class QueryResult {
    static get = {};
    static set = {};
    static info = {};
    node = [];

    constructor(arguments_) {
        switch (typeof arguments_) {
            case 'undefined': {
                console.warn('Undefined args');
                return;
            }
            case 'string': {
                this.node = Array.from(document.querySelectorAll(arguments_));
                return;
            }
            default: {
                if (arguments_[Symbol.iterator]) {
                    for (const item of arguments_) {
                        if (item instanceof Node) {
                            this.node.push(item);
                        }
                    }

                    return;
                }

                if (arguments_ instanceof Node) {
                    this.node.push(arguments_);
                    return;
                }

                console.warn('Invalid args');
            }
        }
    }
}

export const extend = (key, { get, set }) => {
    const info = { set: -1, get: -1 };

    if (set) {
        QueryResult.set[key] = set;
        info.set = set.length;
    }

    if (get) {
        QueryResult.get[key] = get;
        info.get = get.length;
    }

    QueryResult.info[key] = info;
};

export const util = (key, function_) => {
    core[key] = function_;
};

export const alias = (alias, name) => {
    if (QueryResult.set[name]) {
        QueryResult.set[alias] = QueryResult.set[name];
    }

    if (QueryResult.get[name]) {
        QueryResult.get[alias] = QueryResult.get[name];
    }

    QueryResult.info[alias] = QueryResult.info[name];
};

export const get = (key, property) => {
    extend(key, {
        get() {
            return this[property];
        },
    });
};

export const bind = (key, property = key) => {
    extend(key, {
        get() {
            return this[property];
        },
        set(value) {
            this[property] = value;
        },
    });
};

export const proxy = (argument) => {
    const queryResult = new QueryResult(argument);
    return new Proxy(queryResult, {
        get: (target, property, receiver) => {
            const globalReceiver = receiver;

            const forEach = (handler) => {
                for (const [index, item] of queryResult.node.entries()) {
                    handler(proxy(item), index, queryResult);
                }
            };

            switch (property.toString()) {
                case 'Symbol(Symbol.iterator)': {
                    return function* () {
                        for (let key of this.node) {
                            yield proxy(key);
                        }
                    };
                }
                case 'forEach': {
                    return forEach;
                }
                case 'each': {
                    return forEach;
                }
                case 'length': {
                    return queryResult.node.length;
                }
            }

            if (typeof property === 'symbol') return;

            if (Number.isInteger(Number(property))) {
                if (property >= target.node.length) {
                    console.warn('Array index out of bounds');
                    return;
                }

                return proxy(queryResult.node[property]);
            }

            // 重写函数

            if (QueryResult.info[property]) {
                const info = QueryResult.info[property];
                return new Proxy(new Function(), {
                    apply(_target, _thisArgument, argumentsList) {
                        const { length } = argumentsList;
                        if (length === info.get) {
                            return QueryResult.get[property].apply(
                                queryResult.node[0],
                                argumentsList
                            );
                        } else if (length === info.set) {
                            for (const item of queryResult.node) {
                                QueryResult.set[property].apply(
                                    item,
                                    argumentsList
                                );
                            }
                            return globalReceiver;
                        } else {
                            console.warn('Unexpected args length');
                        }
                    },
                });
            }

            if (Reflect.has(queryResult, property)) {
                return Reflect.get(queryResult, property);
            }

            console.warn('Unknown props');
        },
    });
};

export const core = (selector) => proxy(selector);

export default core;
