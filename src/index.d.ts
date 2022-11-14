export type Input =
    | NodeList
    | NodeListOf<any>
    | Node
    | HTMLCollection
    | Array<Node>
    | String;

export type Core = {
    (parameter: Input): QueryResult;
    create(tag: string): QueryResult;
    fromHTML(html: string): QueryResult;
    merge(...arguments_: Array<QueryResult>): QueryResult;
    equal(first: QueryResult, second: QueryResult): boolean;
    clone(queryResult: QueryResult): QueryResult;
};

export type QueryResult = {
    node: HTMLElement[];

    // Mixins

    [Symbol.iterator](): IterableIterator<QueryResult>;
    [index: number]: QueryResult;
    length: number;
    forEach(
        handler: (item: QueryResult, index: number, array: QueryResult) => any
    ): QueryResult;
    each(
        handler: (item: QueryResult, index: number, array: QueryResult) => any
    ): QueryResult;
    first(): QueryResult;
    last(): QueryResult;
    at(index: number): QueryResult;
    filter(
        handler: (
            element: QueryResult,
            index: number,
            array: QueryResult
        ) => any
    ): QueryResult;
    find(
        handler: (
            element: QueryResult,
            index: number,
            array: QueryResult
        ) => any
    ): QueryResult;
    pop(): QueryResult;
    shift(): QueryResult;
    slice(start: number, end: number): QueryResult;
    splice(start: number, deleteCount: number, ...value: Input[]): QueryResult;

    // Attribute
    text(): string;
    text(string: string): QueryResult;
    class(): string;
    class(className: string): QueryResult;
    id(): string;
    id(id: string): QueryResult;
    addClass(className: string): QueryResult;
    removeClass(className: string): QueryResult;
    toggleClass(className: string): QueryResult;
    hasClass(className: string): boolean;
    prop(key: string): string;
    prop(key: string, value: string): QueryResult;
    attr(key: string): string;
    attr(key: string, value: string): QueryResult;
    removeAttr(key: string): QueryResult;
    html(): string;
    html(html: string): QueryResult;

    // Style
    width(): number;
    height(): number;
    innerWidth(): number;
    innerHeight(): number;
    outerWidth(): number;
    outerHeight(): number;
    css(key: string): string;
    css(key: string, value: string): QueryResult;
    style(key: string): string;
    style(key: string, value: string): QueryResult;

    // Event
    event(event: string, handler: (event: CustomEvent) => any): QueryResult;
    on(event: string, handler: (event: CustomEvent) => any): QueryResult;
    trigger(event: string | CustomEvent): QueryResult;
    removeEvent(event: string, handler: (event?: Event) => any): QueryResult;
    blur(handler: (event: FocusEvent) => any): QueryResult;
    focus(handler: (event: FocusEvent) => any): QueryResult;
    focusin(handler: (event: FocusEvent) => any): QueryResult;
    focusout(handler: (event: FocusEvent) => any): QueryResult;
    hover(handler: (event: MouseEvent) => any): QueryResult;
    change(handler: (event: InputEvent) => any): QueryResult;
    click(handler: (event: MouseEvent) => any): QueryResult;
    contextmenu(handler: (event: MouseEvent) => any): QueryResult;
    dblclick(handler: (event: MouseEvent) => any): QueryResult;
    error(handler: (event: UIEvent) => any): QueryResult;
    keydown(handler: (event: KeyboardEvent) => any): QueryResult;
    keypress(handler: (event: KeyboardEvent) => any): QueryResult;
    keyup(handler: (event: KeyboardEvent) => any): QueryResult;
    mousedown(handler: (event: MouseEvent) => any): QueryResult;
    mouseenter(handler: (event: MouseEvent) => any): QueryResult;
    mouseleave(handler: (event: MouseEvent) => any): QueryResult;
    mousemove(handler: (event: MouseEvent) => any): QueryResult;
    mouseout(handler: (event: MouseEvent) => any): QueryResult;
    mouseover(handler: (event: MouseEvent) => any): QueryResult;
    mouseup(handler: (event: MouseEvent) => any): QueryResult;
    resize(handler: (event: UIEvent) => any): QueryResult;
    scroll(handler: (event: Event) => any): QueryResult;
    select(handler: (event: Event) => any): QueryResult;
    submit(handler: (event: SubmitEvent) => any): QueryResult;
    input(handler: (event: InputEvent) => any): QueryResult;
    reset(handler: (event: Event) => any): QueryResult;
    invalid(handler: (event: Event) => any): QueryResult;
    wheel(handler: (event: WheelEvent) => any): QueryResult;
    drag(handler: (event: DragEvent) => any): QueryResult;
    dragend(handler: (event: DragEvent) => any): QueryResult;
    dragenter(handler: (event: DragEvent) => any): QueryResult;
    dragleave(handler: (event: DragEvent) => any): QueryResult;
    dragover(handler: (event: DragEvent) => any): QueryResult;
    dragstart(handler: (event: DragEvent) => any): QueryResult;

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
    input(): void;
    reset(): void;
    invalid(): void;
    wheel(): void;
    drag(): void;
    dragend(): void;
    dragenter(): void;
    dragleave(): void;
    dragover(): void;
    dragstart(): void;

    // Element

    parent(): QueryResult;
    child(): QueryResult;
    children(): QueryResult;
    firstChild(): QueryResult;
    firstChild(queryResult: QueryResult): QueryResult;
    lastChild(): QueryResult;
    lastChild(queryResult: QueryResult): QueryResult;
    hasChild(): boolean;
    before(queryResult: QueryResult): QueryResult;
    after(queryResult: QueryResult): QueryResult;
    remove(): QueryResult;
    index(): number;
    next(): QueryResult;
    prev(): QueryResult;
    siblings(): QueryResult;
    append(queryResult: QueryResult): QueryResult;
    value(): string;
    value(key: string): QueryResult;
    empty(): QueryResult;
    show(): QueryResult;
    hide(): QueryResult;
    toggle(): QueryResult;
    draggable(): null | true | false;
    draggable(value: boolean): QueryResult;
    accesskey(): string;
    accesskey(key: string): QueryResult;
    replace(html: string): QueryResult;
    wrap(tag: string): QueryResult;
    unwrap(): QueryResult;
};

declare const core: Core;

export default core;
