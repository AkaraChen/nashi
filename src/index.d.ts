type Input = Node | HTMLCollection | Array<Node> | String;

declare function core(params: Input): QueryResult;

type QueryResult = {
    node: Node[];
    text(): string;
    text(string: string): QueryResult;
    class(): string;
    class(className: string): QueryResult;
    addClass(className: string): QueryResult;
    removeClass(className: string): QueryResult;
    [Symbol.iterator](): IterableIterator<QueryResult>;
    [index: number]: QueryResult;
};

export default core;
