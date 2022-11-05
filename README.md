# 🍐 Nashi

<pre align="center">🚧 Work in progress</pre>

The modern jQuery alternative.

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
