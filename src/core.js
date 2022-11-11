export class QueryResult {
    node = [];
    constructor(arguments_) {
        // 添加 Node
        if (typeof arguments_ === 'undefined') {
            console.warn('Undefined args');
            return;
        }

        if (typeof arguments_ === 'string') {
            this.node = Array.from(document.querySelectorAll(arguments_));
            return;
        }
        // 判断是数组或者类数组（HTMLCollection 之流）

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

QueryResult.prototype.set = {};
QueryResult.prototype.get = {};
QueryResult.prototype.info = {};

// 增加迭代器

QueryResult.prototype[Symbol.iterator] = function* () {
    let keys = this.node;
    for (let key of keys) {
        yield proxy(key);
    }
};

export const extend = (key, { get, set }) => {
    const info = { set: -1, get: -1 };
    if (set) {
        QueryResult.prototype.set[key] = set;
        info.set = set.length;
    }

    if (get) {
        QueryResult.prototype.get[key] = get;
        info.get = get.length;
    }

    QueryResult.prototype.info[key] = info;
};

export const util = (key, function_) => {
    core[key] = function_;
};

export const alias = (alias, name) => {
    if (QueryResult.prototype.set[name]) {
        QueryResult.prototype.set[alias] = QueryResult.prototype.set[name];
    }

    if (QueryResult.prototype.get[name]) {
        QueryResult.prototype.get[alias] = QueryResult.prototype.get[name];
    }

    QueryResult.prototype.info[alias] = QueryResult.prototype.info[name];
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

            // 模拟数组

            // 将代理的迭代器直接映射到 QueryResult 上

            if (property.toString() === 'Symbol(Symbol.iterator)') {
                return QueryResult.prototype[Symbol.iterator];
            }

            if (property === 'forEach' || property === 'each') {
                return (handler) => {
                    for (const [index, item] of queryResult.node.entries()) {
                        handler(proxy(item), index, queryResult);
                    }
                };
            }

            if (property === 'length') {
                return queryResult.node.length;
            }

            // 处理用数字索引访问代理的情况
            if (
                typeof property !== 'symbol' &&
                Number.isInteger(Number(property))
            ) {
                // 数组越界处理
                if (property >= target.node.length) {
                    console.warn('Array index out of bounds');
                    return;
                }

                // 返回一个包含数字索引对应元素的新代理
                return proxy(queryResult.node[property]);
            }

            // 重写函数

            if (QueryResult.prototype.info[property]) {
                const info = QueryResult.prototype.info[property];
                return new Proxy(new Function(), {
                    apply(_target, _thisArgument, argumentsList) {
                        const { length } = argumentsList;
                        if (length === info.get) {
                            return QueryResult.prototype.get[property].apply(
                                queryResult.node[0],
                                argumentsList
                            );
                        }

                        if (length === info.set) {
                            for (const item of queryResult.node) {
                                QueryResult.prototype.set[property].apply(
                                    item,
                                    argumentsList
                                );
                            }
                            return globalReceiver;
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
