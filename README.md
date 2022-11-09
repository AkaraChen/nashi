# 🍐 Nashi

The modern jQuery alternative.

## Playground

[StackBlitz](https://stackblitz.com/edit/vitejs-vite-kfbsf7?embed=1&file=README.md)

## Motivation

Write this:

```ts
nashi('p').text('hello').addClass('foo').toggleClass('bar');
```

Not that:

```ts
const p = document.querySelectorAll('p');
for (const item of p) {
    p.innerText = 'hello';
    p.classList.add('foo');
    p.classList.toggle('bar');
}
```

## Get started

```shell
pnpm add @akrc/nashi
yarn add @akrc/nashi
npm install @akrc/nashi
```

```ts
import nashi from '@akrc/nashi';

const body = nashi('body');
const p = nashi
    .create('p')
    .text('Hello, World')
    .class('text-lg')
    .id('greet')
    .click(() => console.log('Hello'));
body.firstChild(p);
```

And see [documention](https://nashi.akr.moe)
