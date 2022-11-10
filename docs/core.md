---
title: Core
---

# Core

Nashi have a powerful `QueryResult` object, most APIs provided by `nashi` are on the QueryResult's prototype.

## Get QueryResult

The `nashi(args)` function will return a `QueryResult`, which contains all the element matched. It has 3 overloads:

```ts
/* Args can be a string */
/* All paragraph element will be selected. */
nashi('p');
/* Or you can use CSS selector */
nashi('#navbar.show');
```

```ts
/* Args can be Array or HTMLCollection */
const buttons = document.getElementsByTagName('button');
/* All button element will be selected. */
nashi(buttons);
```

```ts
/* Or you can input a HTMLElement */
const notice = document.querySelector('.notice');
nashi(notice);
```

## Getter and Setter

Most APIs provided by nashi can be divided into two categories: Getter and Setter.

For example:

```ts
/* <p>Foo</p> */
nashi('p').text(); // return 'Foo'
nashi('p').text('Bar');
/* <p>Bar</p> */
```

`Nashi` use the same name for getter and setter function, when the parameters match getter's need, the getter function will be executed, otherwise, the setter function will be executed.

All the getter and setter are available on [Type definition](/type.md).

## Chaining

All setter function can be chaining call, just like this:

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

## Use QueryResult like a array

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

## Utils

There are some API not a part of a Getter or Setter, they are called util. You can call it by using `nashi.{name}`.

Such as:

```ts
nashi.create('p');
// Create a paragraph element, and return as QueryResult.
```
