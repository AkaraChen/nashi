---
title: 样式
---

# 样式

## width()

```ts
// Getter
width(): number;
```

返回元素的 `offsetWidth` ，通常情况下，`offsetWidth = padding + content + border` 。

## height()

```ts
// Getter
height(): number;
```

返回元素的 `offsetHeight` ，通常情况下，`offsetHeight = padding + content + border` 。

## innerWidth()

```ts
// Getter
width(): number;
```

返回元素的 `clientWidth` ，通常情况下，`clientWidth = padding + content` 。

## innerHeight()

```ts
// Getter
height(): number;
```

返回元素的 `clientHeight` ，通常情况下，`clientHeight = padding + content` 。

## css()

```ts
// Getter
css(key: string): string;
// Setter
css(key: string, value: string): QueryResult;
```

获取或者设置元素样式。当设置元素的css时，它支持像`JQuery`这样的链式调用。

#### 示例

```ts
nashi('p').css('border-width', '2px');
```

## style()

```ts
style(key: string): string;
style(key: string, value: string): QueryResult;
```

获取或设置元素样式。它同样也支持链式调用。

#### 示例

```ts
nashi('p').style('borderWidth', '2px');
```
