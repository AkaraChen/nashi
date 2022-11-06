import { expect, test } from 'vitest';
import nashi from '../dist/index.js';

test('merge', () => {
    document.body.innerHTML = `<div></div><p></p>`;
    const ndiv = nashi('div');
    const np = nashi('p');
    const merge = nashi.merge(ndiv, np);
    expect(merge.node.length).toBe(2);
});
