export class QueryResult {
    node = [];
    constructor(args) {
        // 添加 Node
        if (typeof args === 'undefined') {
            console.warn('Undefined args');
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

        console.warn('Invalid args');
    }
}

QueryResult.prototype.set = {};
QueryResult.prototype.get = {};
QueryResult.prototype.info = {};

// 增加迭代器

QueryResult.prototype[Symbol.iterator] = function* () {
    let keys = this.node;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
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

export const util = (key, func) => {
    core[key] = func;
};

export const proxy = (arg) => {
    const queryResult = new QueryResult(arg);
    return new Proxy(queryResult, {
        get: (target, prop, receiver) => {
            const globalReceiver = receiver;

            // 模拟数组

            // 将代理的迭代器直接映射到 QueryResult 上

            if (prop.toString() === 'Symbol(Symbol.iterator)') {
                return QueryResult.prototype[Symbol.iterator];
            }

            // 处理用数字索引访问代理的情况
            if (typeof prop !== 'symbol' && Number.isInteger(Number(prop))) {
                // 数组越界处理
                if (prop >= target.node.length) {
                    console.warn('Array index out of bounds');
                    return;
                }
                // 返回一个包含数字索引对应元素的新代理
                return proxy(queryResult.node[prop]);
            }

            // 重写函数

            if (QueryResult.prototype.info[prop]) {
                const info = QueryResult.prototype.info[prop];
                return new Proxy(new Function(), {
                    apply(_target, _thisArg, argumentsList) {
                        const { length } = argumentsList;
                        if (length === info.get) {
                            return QueryResult.prototype.get[prop].apply(
                                queryResult.node[0],
                                argumentsList
                            );
                        } else if (length === info.set) {
                            queryResult.node.forEach((item) => {
                                QueryResult.prototype.set[prop].apply(
                                    item,
                                    argumentsList
                                );
                            });
                            return globalReceiver;
                        }
                    },
                });
            }

            if (Reflect.has(queryResult, prop)) {
                return Reflect.get(queryResult, prop);
            } else {
                console.warn('Unknown props');
                return;
            }
        },
    });
};

export const core = (selector) => proxy(selector);
export default core;
