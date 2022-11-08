---
title: 核心
---

# Core

Nashi 有一个强大的 `QueryResult` 类, `nashi` 提供的大部分 API 都在它的原型上。

## Get QueryResult

`nashi(args)` 函数会返回一个 `QueryResult`, 它包含了选中的所有元素. 这个函数有三个重载：

```ts
/* 参数可以是字符串 */
/* 所有段落元素都会被选中 */
nashi('p');
```

```ts
/* 参数也可以是 HTMLCollection 或者 HTMLElement[] */
const buttons = document.getElementsByTagName('button');
/* 所有的按钮元素都会被选中 */
nashi(buttons);
```

```ts
/* 或者你可以直接传入一个元素 */
const notice = document.querySelector('.notice');
nashi(notice);
```

## Getter 与 Setter

`nashi` 提供的大部分 API 可以分为两类：Getter 和 Setter。

比如：

```ts
/* <p>Foo</p> */
nashi('p').text(); // 返回 'Foo'
nashi('p').text('Bar');
/* <p>Bar</p> */
```

`nashi` 中的 Getter 和 Setter 共用一个名字, 如果参数长度符合 Getter 的需要, 那么 Getter 函数会被执行，否则，Setter 函数会被执行。

你可以在这里查看所有的 Getter 和 Setter：[Type definition](/type.md).

## 链式调用

所有的 Setter 都可以被链式调用，就像这样：

```ts
nashi('p')
    .text('Hello')
    .prop('id', 'para')
    .class('test bar')
    .addClass('foo')
    .removeClass('bar')
    .click(() => console.log('Nashi is great!'));

//* <p class="test foo" id="para">Hello</p> *//
```

## 像数组一样使用 QueryResult

```ts
let count = 0;
for (const item of nashi('p')) {
    p.text(count++);
}

/* Before   After
<p></p>     <p>0</p>
<p><p>      <p>1<p> */
```

```ts
nashi('p')[1].text('Nashi');

/* Before        After
<p>Hello</p>     <p>Hello</p>
<p>World<p>      <p>Nashi<p> */
```

```ts
nashi('p').forEach((item, index) => {
    item.text(index);
});

/* Before        After
<p>Hello</p>     <p>0</p>
<p>World<p>      <p>1<p> */
```

```ts
/* <p>1</p> <p>2</p> */
nashi('p').length; // 2
```

## 工具

有些 API 既不是 Getter 也不是 Setter，他们被称为 Util，你可以这样调用他们： `nashi.{name}`。

比如：

```ts
nashi.create('p');
// 创建一个段落元素，然后返回 QueryResult
```
