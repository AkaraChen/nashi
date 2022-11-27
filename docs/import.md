---
title: Import
---

# Import

There are several ways to import nashi in your project.

## ESM

If you are using bundlers like [Vite](https://vitejs.dev) or [Webpack](https://webpack.js.org), you can manage nashi package with package manager:

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add @akrc/nashi
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add @akrc/nashi
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install @akrc/nashi
```

  </CodeGroupItem>

</CodeGroup>

Then you can import nashi in following code:

```ts
import nashi from '@akrc/nashi';
```

If you don't have a bundler, you can import it via CDN like [jsDelivr](https://esm.run/@akrc/nashi) or [esm.sh](https://esm.sh/@akrc/nashi):

```html
<script type="module">
    import nashi from 'https://esm.sh/@akrc/nashi';
</script>
```

## IIFE

Just add a script in your HTML files:

```html
<script src="https://unpkg.com/@akrc/nashi@latest/dist/legacy.js"></script>
```

The IIFE version of nashi supports ES5, so the bundle size is 3 times larger than others, so if you can import with ESM, it's best to use ESM.

## CJS

At first, download nashi via package manager:

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm add @akrc/nashi
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add @akrc/nashi
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install @akrc/nashi
```

  </CodeGroupItem>

</CodeGroup>

Then, import nashi as a commonjs module:

```ts
const nashi = require('@akrc/nashi');
```
