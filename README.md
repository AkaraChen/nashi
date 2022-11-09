# 🍐 Nashi

The modern jQuery alternative.

## Playground

[StackBlitz](https://stackblitz.com/edit/vitejs-vite-kfbsf7?embed=1&file=README.md) [CodeSandbox](https://codesandbox.io/p/github/AkaraChen/nashi-playground/main?file=%2Fsrc%2Fmain.ts&workspace=%257B%2522activeFileId%2522%253A%2522cla9j79ua0006l0ii1ano3ao9%2522%252C%2522openFiles%2522%253A%255B%2522%252Fsrc%252Fmain.ts%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522cla9j7gbs005l376hrxqpu06f%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522cla9j7eb4003w376hntp5wd03%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

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
