---
title: Util
---

# Util

## create()

```ts
create(tag: string): QueryResult;
```

- **Detail**

  Create an element, return `QueryResult`. Its usage is similar to `createElement()`.

- **Example**

  ```ts
  const container = nashi.create('div').class('container');
  nashi('body').firstChild(container);
  
  //The tag name provided ('123') is not a valid name.
  const error = nashi.create("123") 
  ```

## fromHTML()

```ts
fromHTML(html: string): QueryResult;
```
- **Detail**

  Create a `QueryResult` from HTML string. Its usage is similar to `innerHTML()`.

- **Example**

  ```ts
  const container = nashi.fromHTML("<h1>nashi is perfect!</h1>")
  nashi('body').firstChild(container);
  ```

## merge()

```ts
merge(...args: Array<QueryResult>): QueryResult;
```
- **Detail**

  Merge any amount of `QueryResult`, return new `QueryResult`. so you can operate them at the same time!

- **Example**

  ```ts
  const QRarr = nashi.merge(nashi('p'), nashi('button'))
  console.log(QRarr.node); //(2) [p, button]
  QRarr.class("QRarr").text("nashi is perfect!").css("color", "red")
  ```

## equal()

```ts
equal(first: QueryResult, second: QueryResult): boolean;
```

- **Detail**

  Return whether two `QueryResult` are equal.

- **Example**

  ```ts
  const para1 = nashi.create('p');
  const para2 = nashi.create('p');
  console.log(nashi.equal(para1, para2)); //false

  console.log(nashi.equal(nashi("p"), nashi("p"))); //true
  ```


## clone()

```ts
clone(queryResult: QueryResult): QueryResult;
```

- **Detail**

  Deep clone and return `QueryResult`.

- **Example**

  ```ts
  const para1 = nashi('p');
  const para2 = nashi.clone(para1);
  console.log(para2.node); //[[p]
  console.log(nashi.equal(para1, para2)); //true

  para2.text("nashi is perfect!")
  console.log(para1.text()); //nashi is perfect!
  ```