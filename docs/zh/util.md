---
title: 工具
---

# 工具

## create()

```ts
create(tag: string): QueryResult;
```

创建一个元素，返回 `QueryResult` ，其用法类似于 `document.createElement()` 。

#### Example

```ts
const container = nashi.create('div').class('container');
nashi('body').firstChild(container);

//The tag name provided ('123') is not a valid name.
const error = nashi.create('123');
```

## fromHTML()

```ts
fromHTML(html: string): QueryResult;
```

从 HTML 字符串创建 `QueryResult` ，其用法类似于 `element.innerHTML` 。

#### Example

```ts
const container = nashi.fromHTML('<h1>nashi is perfect!</h1>');
nashi('body').firstChild(container);
```

## merge()

```ts
merge(...args: Array<QueryResult>): QueryResult;
```

合并任意数量的 `QueryResult` ，返回新的 `QueryResult` 。合并后，可同时对它们进行操作。

#### Example

```ts
const QRarr = nashi.merge(nashi('p'), nashi('button'));
console.log(QRarr.node); //(2) [p, button]
QRarr.class('QRarr').text('nashi is perfect!').css('color', 'red');
```

## equal()

```ts
equal(first: QueryResult, second: QueryResult): boolean;
```

判断两个 `QueryResult` 是否相等。

#### Example

```ts
const para1 = nashi.create('p');
const para2 = nashi.create('p');
console.log(nashi.equal(para1, para2)); //false

console.log(nashi.equal(nashi('p'), nashi('p'))); //true
```

## clone()

```ts
clone(queryResult: QueryResult): QueryResult;
```

深克隆一个 `QueryResult` 。

#### Example

```ts
const para1 = nashi('p');
const para2 = nashi.clone(para1);
console.log(para2.node); //[[p]
console.log(nashi.equal(para1, para2)); //true

para2.text('nashi is perfect!');
console.log(para1.text()); //nashi is perfect!
```
