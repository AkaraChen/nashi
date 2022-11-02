import { test, expect } from 'vitest';
import nashi from '../src/index.js';

test('core', () => {
    document.body.innerHTML = '<p></p>'.repeat(5);
    const np = nashi('p');
    const [first, second] = document.querySelectorAll('p')!;
    expect(np.node.length).toBe(5);
    expect(np[0].node.length).toBe(1);
    np[0].text('noop');
    expect(first.innerText).toBe('noop');
    expect(second.innerText).toBe('');
    let count = 0;
    for (const _ of np) count++;
    expect(count).toBe(5);
});
