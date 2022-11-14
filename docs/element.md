---
title: Element
---

# Element

## parent()

```ts
// Getter
parent(): QueryResult;
```

Return element's `parentNode` .

#### Example

```html
<body>
  <div>
    <h2>
      <p>nashi is perfect!</p>
      <em>nashi is perfect!</em>
    </h2>
  </div>
</body>
```

```ts
const dv = nashi("div")
console.log(dv.parent().node); // [body]
```

## child()

alias: `children()`

```ts
// Getter
child(): QueryResult;
```

Return element's `childNode[]` .

#### Example

```ts
const h2 = nashi("h2")
console.log(h2.child().node); // [p, em]
```

## firstChild()

```ts
// Getter
firstChild(): QueryResult;
// Setter
firstChild(queryResult: QueryResult): QueryResult;
```

Get the first child of the element, or insert an element before the element's first child .

#### Example

```ts
const h2 = nashi("h2")
// Getter
console.log(h2.firstChild().node); // [p]

// Setter
h2.firstChild(nashi.create("span").text("nashi"))
console.log(h2.firstChild().node); // [span]
```

## lastChild()

```ts
// Getter
lastChild(): QueryResult;
// Setter
lastChild(queryResult: QueryResult): QueryResult;
```

Get the last child of the element, or append an element to the element's last child .

#### Example

```ts
const h2 = nashi("h2")
// Getter
console.log(h2.lastChild().node); // [em]

// Setter
h2.lastChild(nashi.create("span").text("nashi"))
console.log(h2.lastChild().node); // [span]
```

## hasChild()

```ts
// Getter
hasChild(): boolean;
```

Return `true` if the element has child nodes or text nodes .

#### Example

```html
<h2>
  <span></span>
  <p>nashi is perfect!</p>
</h2>
```

```ts
const h2 = nashi("h2")
console.log(h2.hasChild()); // true

const para = nashi("p")
console.log(para.hasChild()); // true

const span = nashi("span")
console.log(span.hasChild()); // false
```

## before()

```ts
// Setter
before(queryResult: QueryResult): QueryResult;
```

Insert a element before the element .

#### Example

```html
<h2>
  <em>nashi is perfect!</em>
</h2>
```

```ts
const span = nashi.create("span").text("nashi is perfect!")
const em = nashi("em")
em.before(span)
```

```html
<!-- the result -->
<h2>
  <span>nashi is perfect!</span>
  <em>nashi is perfect!</em>
</h2>
```

## after()

```ts
// Setter
after(queryResult: QueryResult): QueryResult;
```

Insert a element after the element .

#### Example

```html
<h2>
  <em>nashi is perfect!</em>
</h2>
```

```ts
const span = nashi.create("span").text("nashi is perfect!")
const em = nashi("em")
em.after(span)
```

```html
<!-- the result -->
<h2>
  <em>nashi is perfect!</em>
  <span>nashi is perfect!</span>
</h2>
```

## remove()

```ts
// Setter
remove(): QueryResult;
```

Remove element.

#### Example

```html
<h2>
  <em>nashi is perfect!</em>
</h2>
```

```ts
const em = nashi("em")
em.remove()
```
```html
<!-- the result -->
<h2></h2>
```

## index()

```ts
// Getter
index(): number;
```

Get the sorting of the current element in its parentNode .

#### example

```html
<div>
  <em>nashi is perfect!</em>
  <p>nashi is perfect!</p>
</div>
```

```ts
console.log(nashi("em").index()); // 0
console.log(nashi("p").index()); // 1
```

## next()

```ts
// Getter
next(): QueryResult;
```

Get element's `nextSibling` .

#### example

```html
<div>
  <em>nashi is perfect!</em>
  <p>nashi is perfect!</p>
</div>
```

```ts
const em = nashi("em")
console.log(em.next().node); // [p]
```

## prev()

```ts
// Getter
prev(): QueryResult;
```

Get element's previous sibling .

#### example

```ts
const p = nashi("p")
console.log(p.prev().node); // [em]
```

## siblings()

```ts
// Getter
siblings(): QueryResult;
```

Get element's all siblings .

#### example

```html
<div>
  <span>nashi</span>
  <p>nashi is perfect!</p>
  <em>nashi</em>
</div>
```

```ts
const para = nashi("p")
console.log(para.siblings().node) // [span, em]
```

## append()

```ts
// Setter
append(queryResult: QueryResult): QueryResult;
```

Append `QueryResult` to the element . Its usege is similar to `lastChild()` .

#### example

```html
<div>
  <span>nashi is perfect!</span>
</div>
```
```ts
const para = nashi.create("p").text("nashi")
const dv = nashi("div")
dv.append(para)
```

```html
<!-- the result -->
<div>
  <span>nashi is perfect!</span>
  <p>nashi</p>
</div>
```

## empty()

```ts
// Setter
empty(): QueryResult;
```

Remove all childNodes .

#### example

```html
<div>
  <span>nashi is perfect!</span>
  <p>nashi</p>
  <em>nashi</em>
</div>
```
```ts
const dv = nashi("div")
dv.empty()
```

```html
<!-- the result -->
<div></div>
```

## show()

```ts
show(): QueryResult;
```

Set `element.style.display` to `''` .

#### example

```html
<div>
  <span>nashi is perfect!</span>
</div>
```
```ts
const p = nashi("p")
p.hide()
p.show()
```

```html
<!-- the result -->
<div></div>
```

## hide()

```ts
hide(): QueryResult;
```

Set `element.style.display` to `'none'` .

#### example

```html
<div>
  <span>nashi is perfect!</span>
</div>
```
```ts
const span = nashi("span")
span.hide()
```

```html
<!-- the result -->
<div></div>
```

## toggle()

```ts
toggle(): QueryResult;
```

Set `element.style.display` is `'none'` , set `element.style.display` to `''` , otherwise set it to `'none'` .

#### example

```html
<div>
  <p style="display: none;">nashi is perfect!</p>
  <h1>nashi is perfect!</h1>
</div>
```

```ts
const p = nashi("p")
const h1 = nashi("h1")
p.toggle()
h1.toggle()
```

```html
<div>
  <p>nashi is perfect!</p>
  <h1 style="display: none;">nashi is perfect!</h1>
</div>
```

## draggable()

```ts
// Getter
draggable(): null | true | false;
// Setter
draggable(value: boolean): QueryResult;
```

Get or set element's attrbute draggable .

#### example

```html
<div>
  <p>nashi is perfect!</p>
  <span draggable="true">nashi</span>
</div>
```

```ts
const p = nashi("p")
const span = nashi("span")
console.log(p.draggable()); // null
console.log(span.draggable()); // true

p.draggable(true)
```

```html
<div>
  <p draggable="true">nashi is perfect!</p>
  <span draggable="true">nashi is perfect!</span>
</div>
```

## replace()

```ts
// Setter
replace(html: string): QueryResult;
```

Replace element's with html.

## wrap()

```ts
// Setter
wrap(html: string): QueryResult;
```

Wrap element with a container.

#### example

```ts
nashi.createElement('p')
  .text('nashi is great!')
  .wrap('div')
```

```html
<div>
  <p>nashi is great!</p>
</div>
```

## unwrap()

```ts
// Setter
unwrap(): QueryResult;
```

Unwrap an element.

#### example

```ts
nashi('.container').unwrap()
```

```html
<!-- Before -->
<div class="container">
  <p>Test</p>
</div>

<!-- After -->
<p>Test</p>
```


## Tag

```ts
// Getter
tag(): string
```

Return element's `tagName` in lowerCase.
