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
const p = document.getElementByTagName('p');
for (const item of p) {
    p.innerText = 'hello';
    p.classList.add('foo');
    p.classList.toggle('bar');
}
```
