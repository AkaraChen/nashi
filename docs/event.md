---
title: Event
---

# Event

`Nashi` you can set EventListner by calling `nashi('p').{eventName}`, just like:

```ts
nashi('p').click(() => console.log('Nashi is great!'));
```

Or you can trigger element's event:

```ts
nashi('p').click(); // Nashi is great!
```

Here are supported events:

| blur      | focus     | focusin    | focusout    |
| --------- | --------- | ---------- | ----------- |
| hover     | change    | click      | contextmenu |
| dblclick  | error     | keydown    | keypress    |
| keyup     | mousedown | mouseenter | mouseleave  |
| mousemove | mouseout  | mouseover  | mouseup     |
| resize    | scroll    | select     | submit      |

Or you can call it using `event()`:

```ts
nashi('p').event('click', () => console.log('Nashi is great!'));
nashi('p').event('click'); // Nashi is great!
```

Or you can trigger event by using `trigger()`:

```ts
nashi('p').trigger('click');
```
