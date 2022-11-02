type Input = Node | HTMLCollection | Array<Node> | String;

declare function core(params: Input): QueryResult;

type QueryResult = {
    node: HTMLElement[];
    [Symbol.iterator](): IterableIterator<QueryResult>;
    [index: number]: QueryResult;
    text(): string;
    text(string: string): QueryResult;
    class(): string;
    class(className: string): QueryResult;
    addClass(className: string): QueryResult;
    removeClass(className: string): QueryResult;
    toggleClass(className: string): QueryResult;
    hasClass(className: string): boolean;
    prop(key: string): string;
    prop(key: string, value: string): QueryResult;
    html(): string;
    html(html: string): QueryResult;
    width(): number;
    height(): number;
    innerWidth(): number;
    innerHeight(): number;
    css(key: string): string;
    css(key: string, value: string): QueryResult;
    style(key: string): string;
    style(key: string, value: string): QueryResult;
};

export default core;
