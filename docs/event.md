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

Or you can call it using `event()` or `on()` (on is an alia of event):

```ts
nashi('p').event('click', () => console.log('Nashi is great!'));
nashi('p').event('click'); // Nashi is great!
```

Or you can trigger event by using `trigger()`:

```ts
nashi('p').trigger('click');
```

You can remove event listener by calling `removeEvent()`;

```ts
let count = 0;
const handler = count++;
const np = nashi('p');
np.click(handler);
np.click(); // count = 1
np.removeEvent('click', handler);
np.click(); // count = 1
```
