---
title: 元素
---

# 元素

## parent()

```ts
// Getter
parent(): QueryResult;
```

返回元素的 `parentNode`.

## child()

```ts
// Getter
child(): QueryResult;
```

返回元素的 `childNode[]`.

## firstChild()

```ts
// Getter
firstChild(): QueryResult;
// Setter
firstChild(queryResult: QueryResult): QueryResult;
```

获取元素的第一个子元素，或者将参数里的元素插入到当前元素的第一个子元素前。

## lastChild()

```ts
// Getter
lastChild(): QueryResult;
// Setter
lastChild(queryResult: QueryResult): QueryResult;
```

获取元素的最后一个元素，或者将参数里的元素插入到当前元素的最后一个子元素后。

## hasChild()

```ts
// Getter
hasChild(): boolean;
```

返回当前元素是否有 child。

## before()

```ts
// Setter
before(queryResult: QueryResult): QueryResult;
```

在此元素前插入参数传入的元素。

## after()

```ts
// Setter
after(queryResult: QueryResult): QueryResult;
```

在此元素后插入参数传入的元素。

## remove()

```ts
// Setter
remove(): QueryResult;
```

移除一个元素。

## index()

```ts
// Getter
index(): number;
```

获取当前元素在其父元素中的排序。

## next()

```ts
// Getter
next(): QueryResult
```

获取元素的 `nextSibling`。

## prev()

```ts
// Getter
prev(): QueryResult
```

获取元素的上一个兄弟元素。

## siblings()

```ts
// Getter
siblings(): QueryResult
```

获取元素的所有兄弟元素。
