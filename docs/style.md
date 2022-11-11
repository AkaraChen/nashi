---
title: Style
---

# Style

## width()

```ts
// Getter
width(): number;
```

Return element's `offsetWidth` . Normally , `offsetWidth = padding + content + border` .

#### Example

```ts
const width1 = document.querySelector("p").offsetWidth
const width2 = nashi("p").width()
console.log(width1 == width2);  // true
```

## height()

```ts
// Getter
height(): number;
```

Return element's `offsetHeight` . Normally , `offsetHeight = padding + content + border` .

#### Example

```ts
const height1 = document.querySelector("p").offsetHeight
const height2 = nashi("p").height()
console.log(height1 == height2);  // true
```

## innerWidth()

```ts
// Getter
width(): number;
```

Return element's `clientWidth` . Normally , `clientWidth = padding + content` .

#### Example

```ts
const width1 = document.querySelector("p").clientWidth
const width2 = nashi("p").innerWidth()
console.log(width1 == width2);  // true
```

## innerHeight()

```ts
// Getter
height(): number;
```

Return element's `clientHeight` . Normally , `clientHeight = padding + content` .

#### Example

```ts
const height1 = document.querySelector("p").clientHeight
const height2 = nashi("p").innerHeight()
console.log(height1 == height2);  // true
```


## css()

```ts
// Getter
css(key: string): string;
// Setter
css(key: string, value: string): QueryResult;
```

Get or set style . When you set an element's css , it supports chain invocation like `JQuery` .

#### Example

```ts
const para = nashi("p")
para.text("nashi is perfect!")
    .css("backgroundColor", "skyblue")
    .css("font-size", "25px")

console.log(para.css("background-color")); // skyblue
console.log(para.css("fontSize")); // 25px
```

## style()

```ts
style(key: string): string;
style(key: string, value: string): QueryResult;
```

Get or set style . It also supports chain invocation .

#### Example

```ts
const para = nashi("p")
para.text("nashi is perfect!")
    .style("backgroundColor", "skyblue")
    .style("font-size", "25px")

console.log(para.style("background-color")); // skyblue
console.log(para.style("fontSize")); // 25px
```
