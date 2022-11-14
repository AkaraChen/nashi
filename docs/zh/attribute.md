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

获取或者设置元素的 `innerText` 。

####  example

```ts
// Getter
console.log(nashi("p").text()) // nashi is small

//Setter
nashi("p").text("nashi")
console.log(nashi("p").text()) // nashi
```

```html
<!-- Before -->
<p>nashi is small</p>

<!-- After -->
<p>nashi</p>
```

## class()

```ts
// Getter
class(): string;
// Setter
class(className: string): QueryResult;
```

获取或者设置元素的 `className` 。

####  example

```ts
// Getter
console.log(nashi("p").class()) // content
console.log(document.querySelector("p").className); // content

// Setter
nashi("p").class("nashi is small")
```

```html
<!-- Before -->
<p class="content">nashi is small</p>

<!-- After -->
<p class="nashi is small">nashi is small</p>
```

## id()

```ts
// Getter
id(): string;
// Setter
id(id: string): QueryResult;
```

获取或者设置元素的 `id` 。

####  example

```ts
// Getter
console.log(nashi("p").id()) // content
console.log(document.querySelector("p").id); // content

// Setter
nashi("p").id("nashi is small")
```

```html
<!-- Before -->
<p id="content">nashi is small</p>

<!-- After -->
<p id="nashi is small">nashi is small</p>
```

## addClass()

```ts
// Setter
addClass(className: string): QueryResult;
```

对应元素添加 className 。

####  example

```ts
// Getter
nashi("p").addClass("nashi")
```

```html
<!-- Before -->
<p>nashi is small</p>

<!-- After -->
<p class="nashi">nashi is small</p>
```

## removeClass()

```ts
// Setter
removeClass(className: string): QueryResult;
```

移除对应元素的 className 。

####  example

```ts
// Getter
nashi("p").removeClass("small")
```

```html
<!-- Before -->
<p class="nashi small">nashi is small</p>

<!-- After -->
<p class="nashi">nashi is small</p>
```

## hasClass()

```ts
// Getter
hasClass(className: string): boolean;
```

返回元素是否拥有指定的 className 。

#### example

```html
<p class="nashi is small">nashi is small</p>
```

```ts
console.log(nashi("p").hasClass("small")); // true
console.log(nashi("p").hasClass("nashi")) // false
```

## toggleClass()

```ts
// Setter
toggleClass(className: string): QueryResult;
```

如果元素有这个 className，则移除它，否则添加它 。

#### example

```html
<p class="nashi small">nashi is small</p>
```

```ts
const para = nashi("p")
para.toggleClass("small")
console.log(para.class()); // nashi

para.toggleClass("small")
console.log(para.class()); // nashi small
```

## attr()

```ts
// Getter
attr(key: string): string;
// Setter
attr(key: string, value: string): QueryResult;
```

获取或者设置元素的 `attribute` 。

#### example

```ts
const para = nashi("p")
console.log(para.attr("class")); // nashi

para.attr("class", "nashi small")
console.log(para.class()); // nashi small
```

```html
<!--Before-->
<p class="nashi">nashi is small</p>

<!--After-->
<p class="nashi small">nashi is small</p>
```

## prop()

```ts
// Getter
prop(key: string): string;
// Setter
prop(key: string, value: string): QueryResult;
```

获取或者设置元素的 `prop` 。

## html()

```ts
html(): string;
html(html: string): QueryResult;
```

获取或者设置元素的 `innerHTML` 。

#### example

```ts
const dv = nashi("div")
dv.html("<p>nashi is small</p>")
console.log(dv.html());
```

```html
<!--Before-->
<div></div>

<!--After-->
<div>
  <p>nashi is small</p>
</div>
```

## accesskey()

```ts
// Getter
accesskey(): string;
// Setter
accesskey(key: string): QueryResult;
```

获取或者设置元素的 `accesskey` 。

## removeAttr()

```ts
// Setter
removeAttr(key: string): QueryResult
```

删除元素的 `attribute` 。

#### example

```ts
const para = nashi("p")
para.removeAttr("class")
console.log(para.class()); // ""
```

```html
<!--Before-->
<p class="nashi">small</p>

<!--After-->
<p class="">small</p>
```