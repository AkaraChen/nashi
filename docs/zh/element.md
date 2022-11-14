---
title: 元素
---

# 元素

## parent()

```ts
// Getter
parent(): QueryResult;
```

返回元素的 `parentNode` 。

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

返回元素的 `childNode[]` 。

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

获取元素的第一个子元素，或者将参数里的元素插入到当前元素的第一个子元素前 。

#### Example

```ts
const h2 = nashi("h2")
// // Getter
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

获取元素的最后一个元素，或者将参数里的元素插入到当前元素的最后一个子元素后 。

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

如果元素有子节点或者文本节点，将返回true 。

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

在此元素前插入参数传入的元素。

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

在此元素后插入参数传入的元素。

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

移除一个元素。

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

获取当前元素在其父元素中的排序 。

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

获取元素的 `nextSibling` 。

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

获取元素的上一个兄弟元素 。

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

获取元素的所有兄弟元素 。

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

将`QueryResult`添加到元素子节点最后 ，它的用法类似于`nashi("element").lastChild()` .

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

移除该元素所有的子元素 。

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

将 `element.style.display` 设置为 `''` .

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

将 `element.style.display` 设置为 `'none'` .

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

如果 `element.style.display` 为 `'none'` ，将 `element.style.display` 设置为 `''` , 否则设置为 `'none'`.
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
draggable(): null | 'true' | 'false';
// Setter
draggable(value: boolean): QueryResult;
```

获取或者设置元素的属性 draggable 。

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
replace(html: string): QueryResult;
```

将元素替换为 HTML。

## wrap()

```ts
// Setter
wrap(html: string): QueryResult;
```

将元素用指定的标签包裹。

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

将元素移除出文档，并且将子元素放置到元素原来的位置。

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

返回元素的 `tagName` 的小写形式。

#### example

```html
<div class="container"></div>
```

```ts
console.log(nashi(".container").tag()) // div
```
