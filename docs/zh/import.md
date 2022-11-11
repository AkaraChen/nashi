---
title: 导入
---

# 导入

有几种方法能将 nashi 引入你的项目。

## ESM

如果你使用 [Vite](https://vitejs.dev) 或 [Webpack](https://webpack.js.org) 的打包器，你可以使用包管理器来管理 nashi：
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

然后使用下面的代码来导入 nashi：

```ts
import nashi from '@akrc/nashi';
```

如果你没有使用打包器，你可以考虑从 [jsDelivr](https://esm.run/@akrc/nashi) 或 [esm.sh](https://esm.sh/@akrc/nashi@0.1.2) 这样的 CDN 来导入:

```html
<script type="module">
    import nashi from 'https://esm.sh/@akrc/nashi';
</script>
```

## IIFE

只需要在 HTML 里添加如下标签。

```html
<script src="https://unpkg.com/@akrc/nashi@0.1.2/dist/legacy.js"></script>
```

IIFE 版本的 Nashi 支持 ES5，所以打包大小是其他版本的三倍，因此如果有条件，应尽量使用 ESM。

## CJS

首先，先用包管理器下载 Nashi：

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

然后，把 nashi 作为 commonjs 模块导入：

```ts
const nashi = require('@akrc/nashi');
```
