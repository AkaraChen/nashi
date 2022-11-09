---
title: Style
---

# Style

## width()

```ts
// Getter
width(): number;
```

Return element's `offsetWidth`

## height()

```ts
// Getter
height(): number;
```

Return element's `offsetHeight`

## innerWidth()

```ts
// Getter
width(): number;
```

Return element's `clientWidth`

## innerHeight()

```ts
// Getter
height(): number;
```

Return element's `clientHeight`

## css()

```ts
// Getter
css(key: string): string;
// Setter
css(key: string, value: string): QueryResult;
```

Get or set style.

#### Example

```ts
nashi('p').css('border-width', '2px');
```

## style()

```ts
style(key: string): string;
style(key: string, value: string): QueryResult;
```

Get or set style.

#### Example

```ts
nashi('p').style('borderWidth', '2px');
```
