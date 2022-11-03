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

Get the first child of the element, or insert an element to the element.

## lastChild()

```ts
// Getter
lastChild(): QueryResult;
// Setter
lastChild(queryResult: QueryResult): QueryResult;
```

Get the last child of the element, or append an element to the element.

## hasChild()

```ts
// Getter
hasChild(): boolean;
```

Return if element has child.
