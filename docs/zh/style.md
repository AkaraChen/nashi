---
title: 样式
---

# 样式

## width()

```ts
// Getter
width(): number;
```

返回元素的 `offsetWidth`

## height()

```ts
// Getter
height(): number
```

返回元素的 `offsetHeight`

## innerWidth()

```ts
// Getter
width(): number;
```

返回元素的 `clientWidth`

## innerHeight()

```ts
// Getter
height(): number
```

返回元素的 `clientHeight`

## css()

```ts
// Getter
css(key: string): string;
// Setter
css(key: string, value: string): QueryResult;
```

获取或者设置样式。

#### 示例

```ts
nashi('p').css('border-width', '2px');
```

## style()

```ts
style(key: string): string;
style(key: string, value: string): QueryResult;
```

获取或设置样式

#### 示例

```ts
nashi('p').style('borderWidth', '2px');
```
