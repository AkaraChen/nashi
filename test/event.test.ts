import nashi from '../dist/index';

const eventList = [
    'blur',
    'focus',
    'focusin',
    'focusout',
    'change',
    'click',
    'contextmenu',
    'dblclick',
    'error',
    'keydown',
    'keypress',
    'keyup',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'resize',
    'scroll',
    'select',
    'submit',
    'input',
    'invalid',
    'reset',
    'wheel',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
];

for (const event of eventList) {
    test(`event ${event}`, () => {
        let count = 0;
        const n = nashi.create('div');
        n[event](() => count++);
        n[event]();
        expect(count).toBe(1);
    });
}

test('event', () => {
    let count = 0;
    const n = nashi.create('div');
    const handler = () => count++;
    n.event('click', handler);
    expect(count).toBe(0);
    n.trigger('click');
    expect(count).toBe(1);
    n.on('click', handler);
    n.trigger('click');
    expect(count).toBe(3);
    n.removeEvent('click', handler);
    n.trigger('click');
    expect(count).toBe(4);
    n.removeEvent('click', handler);
    expect(count).toBe(4);
});

test('custom event', () => {
    let count = 0;
    const n = nashi.create('div');
    n.event('test', (event) => {
        count = event.detail.value;
    });
    n.trigger(new CustomEvent('test', {detail: {value: count + 1}}));
    expect(count).toBe(1);
});
