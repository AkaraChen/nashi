---
title: Util
---

# Util

## create()

```ts
create(tag: string): QueryResult;
```

Create an element, return `QueryResult`.

#### Example

```ts
const container = nashi.create('div').class('container');
nashi('body').firstChild(container);
```

## fromHTML()

```ts
fromHTML(html: string): QueryResult;
```

Create a `QueryResult` from HTML string.

## merge()

```ts
merge(...args: Array<QueryResult>): QueryResult;
```

Merge two `QueryResult`, return new `QueryResult`.
