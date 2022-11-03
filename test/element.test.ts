import { test, expect } from 'vitest';
import nashi from '../dist/index.js';

test('element', () => {
    document.body.innerHTML = '<div></div>';
    const div = document.querySelector('div')!;
    const ndiv = nashi('div');
    expect(ndiv.hasChild()).toBe(false);
    const p = document.createElement('p');
    const np = nashi(p);
    ndiv.lastChild(np);
    expect(ndiv.hasChild()).toBe(true);
    const span = document.createElement('span');
    const nspan = nashi(span);
    ndiv.firstChild(nspan);
    expect(ndiv.firstChild().toString()).toBe(nspan.toString());
    expect(div.firstChild).toBe(span);
    expect(div.lastChild).toBe(p);
});
