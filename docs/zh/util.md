---
title: 工具
---

# 工具

## create()

```ts
create(tag: string): QueryResult;
```

创建一个元素，返回 `QueryResult`.

#### 示例

```ts
const container = nashi.create('div').class('container');
nashi('body').firstChild(container);
```

## fromHTML()

```ts
fromHTML(html: string): QueryResult;
```

从 HTML 字符串创建 `QueryResult`。

## merge()

```ts
merge(...args: Array<QueryResult>): QueryResult;
```

合并任意数量的 `QueryResult`，返回新的 `QueryResult`。