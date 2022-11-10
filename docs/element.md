---
title: Element
---

# Element

## parent()

```ts
// Getter
parent(): QueryResult;
```

Return element's `parentNode`.

## child()

alias: `children()`

```ts
// Getter
child(): QueryResult;
```

Return element's `childNode[]`.

## firstChild()

```ts
// Getter
firstChild(): QueryResult;
// Setter
firstChild(queryResult: QueryResult): QueryResult;
```

Get the first child of the element, or insert an element before the element's first child.

## lastChild()

```ts
// Getter
lastChild(): QueryResult;
// Setter
lastChild(queryResult: QueryResult): QueryResult;
```

Get the last child of the element, or append an element to the element's last child.

## hasChild()

```ts
// Getter
hasChild(): boolean;
```

Return if element has child.

## before()

```ts
// Setter
before(queryResult: QueryResult): QueryResult;
```

Insert a element before the element.

## after()

```ts
// Setter
after(queryResult: QueryResult): QueryResult;
```

Insert a element after the element.

## remove()

```ts
// Setter
remove(): QueryResult;
```

Remove element.

## index()

```ts
// Getter
index(): number;
```

Get element's index of it's parentNode.

## next()

```ts
// Getter
next(): QueryResult;
```

Get element's `nextSibling`.

## prev()

```ts
// Getter
prev(): QueryResult;
```

Get element's previous sibling.

## siblings()

```ts
// Getter
siblings(): QueryResult;
```

Get element's all siblings.

## append()

```ts
// Setter
append(queryResult: QueryResult): QueryResult;
```

Append `QueryResult` to the element.

## empty()

```ts
// Setter
empty(): QueryResult;
```

Remove all childNodes.

## show()

```ts
show(): QueryResult;
```

Set `element.style.display` to `''`.

## hide()

```ts
hide(): QueryResult;
```

Set `element.style.display` to `'none'`.

## toggle()

```ts
toggle(): QueryResult;
```

Set `element.style.display` is `'none'`, set `element.style.display` to `''`, otherwise set it to `'none'`.
