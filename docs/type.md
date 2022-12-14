---
title: Type
---

# Type

```ts
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
    event(event: string, handler: () => any): QueryResult;
    blur(handler: () => any): QueryResult;
    focus(handler: () => any): QueryResult;
    focusin(handler: () => any): QueryResult;
    focusout(handler: () => any): QueryResult;
    hover(handler: () => any): QueryResult;
    change(handler: () => any): QueryResult;
    click(handler: () => any): QueryResult;
    contextmenu(handler: () => any): QueryResult;
    dblclick(handler: () => any): QueryResult;
    error(handler: () => any): QueryResult;
    keydown(handler: () => any): QueryResult;
    keypress(handler: () => any): QueryResult;
    keyup(handler: () => any): QueryResult;
    mousedown(handler: () => any): QueryResult;
    mouseenter(handler: () => any): QueryResult;
    mouseleave(handler: () => any): QueryResult;
    mousemove(handler: () => any): QueryResult;
    mouseout(handler: () => any): QueryResult;
    mouseover(handler: () => any): QueryResult;
    mouseup(handler: () => any): QueryResult;
    resize(handler: () => any): QueryResult;
    scroll(handler: () => any): QueryResult;
    select(handler: () => any): QueryResult;
    submit(handler: () => any): QueryResult;
    blur(handler: () => any): QueryResult;
    focus(): void;
    focusin(): void;
    focusout(): void;
    hover(): void;
    change(): void;
    click(): void;
    contextmenu(): void;
    dblclick(): void;
    error(): void;
    keydown(): void;
    keypress(): void;
    keyup(): void;
    mousedown(): void;
    mouseenter(): void;
    mouseleave(): void;
    mousemove(): void;
    mouseout(): void;
    mouseover(): void;
    mouseup(): void;
    resize(): void;
    scroll(): void;
    select(): void;
    submit(): void;
    parent(): QueryResult;
    child(): QueryResult;
    firstChild(): QueryResult;
    firstChild(queryResult: QueryResult): QueryResult;
    lastChild(): QueryResult;
    lastChild(queryResult: QueryResult): QueryResult;
    hasChild(): boolean;
};

export default core;
```
