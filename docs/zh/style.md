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

获取或者设置元素样式。

#### 示例

```ts
const para = nashi('p');
para.text('nashi is perfect!')
    .css('backgroundColor', 'skyblue')
    .css('font-size', '25px');

console.log(para.css('background-color')); // skyblue
console.log(para.css('fontSize')); // 25px
```

## style()

```ts
// Getter
style(key: string): string;
// Setter
style(key: string, value: string): QueryResult;
```

获取或设置元素样式。

#### 示例

```ts
const para = nashi('p');
para.text('nashi is perfect!')
    .style('backgroundColor', 'skyblue')
    .style('font-size', '25px');

console.log(para.style('background-color')); // skyblue
console.log(para.style('fontSize')); // 25px
```
