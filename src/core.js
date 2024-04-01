class QueryResult {
    static get = {};

    static set = {};

    static info = {};

    static mixin = {};

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
        }

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

export const proxy = argument => {
    const queryResult = new QueryResult(argument);
    return new Proxy(queryResult, {
        get: (target, property, receiver) => {
            const globalReceiver = receiver;

            if (Object.keys(QueryResult.mixin).includes(property.toString())) {
                return new Proxy(new Function(), {
                    apply(_target, _thisArgument, argumentsList) {
                        return QueryResult.mixin[property.toString()].apply(
                            queryResult,
                            argumentsList
                        );
                    }
                })();
            }

            if (typeof property === 'symbol') return;

            if (Number.isInteger(Number(property))) {
                if (property >= target.node.length) {
                    console.warn('Array index out of bounds');
                    return;
                }

                return proxy(queryResult.node[property]);
            }

            if (QueryResult.info[property]) {
                const info = QueryResult.info[property];
                return new Proxy(new Function(), {
                    apply(_target, _thisArgument, argumentsList) {
                        const { length } = argumentsList;
                        if (length === info.get) {
                            if (queryResult.node[0]) {
                                return QueryResult.get[property].apply(
                                    queryResult.node[0],
                                    argumentsList
                                );
                            }
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
                    }
                });
            }

            if (Reflect.has(queryResult, property)) {
                return Reflect.get(queryResult, property);
            }

            console.warn('Unknown props');
        }
    });
};

export const extend = (key, { get, set }) => {
    const info = { get: -1, set: -1 };

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

export const alias = (alia, name) => {
    if (QueryResult.set[name]) {
        QueryResult.set[alia] = QueryResult.set[name];
    }

    if (QueryResult.get[name]) {
        QueryResult.get[alia] = QueryResult.get[name];
    }

    QueryResult.info[alia] = QueryResult.info[name];
};

export const get = (key, property) => {
    extend(key, {
        get() {
            return this[property];
        }
    });
};

export const bind = (key, property = key) => {
    extend(key, {
        get() {
            return this[property];
        },
        set(value) {
            this[property] = value;
        }
    });
};

export const mixin = (key, function_) => {
    QueryResult.mixin[key] = function_;
};

export const core = selector => proxy(selector);

export const util = (key, function_) => {
    core[key] = function_;
};

export default core;
