---
title: 属性
---

# Attribute

## text()

```ts
// Getter
text(): string;
// Setter
text(string: string): QueryResult;
```

获取或者设置元素的 `innerText`。

## class()

```ts
// Getter
class(): string;
// Setter
class(className: string): QueryResult;
```

获取或者设置元素的 `className`。

## id()

```ts
// Getter
id(): string;
// Setter
id(id: string): QueryResult;
```

获取或者设置元素的 `id`。

## addClass()

```ts
// Setter
addClass(className: string): QueryResult;
```

添加 className。

## removeClass()

```ts
// Setter
removeClass(className: string): QueryResult;
```

移除 className。

## hasClass()

```ts
// Getter
hasClass(className: string): boolean;
```

返回元素是否拥有指定的 className。

## toggleClass()

```ts
// Setter
toggleClass(className: string): QueryResult;
```

如果元素有这个 className，则移除它，否则添加它。

## prop()

```ts
// Getter
prop(key: string): string;
// Setter
prop(key: string, value: string): QueryResult;
```

获取或者设置元素的 `prop`。

## html()

```ts
html(): string;
html(html: string): QueryResult;
```

获取或者设置元素的 `innerHTML`。

## accesskey()

```ts
// Getter
accesskey(): string;
// Setter
accesskey(key: string): QueryResult;
```

获取或者设置元素的 `accesskey`。

## removeAttr()

```ts
// Setter
removeAttr(key: string): QueryResult
```

删除元素的 `attribute`。
