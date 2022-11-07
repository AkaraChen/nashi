import { expect, test } from 'vitest';
import nashi from '../dist/index.js';

test('event', () => {
    let count = 0;
    const p = nashi.fromHTML('<p></p>');
    p.click(() => count++);
    p.click();
    expect(count).toBe(1);
    p.on('click', () => count++);
    p.click();
    expect(count).toBe(3);
    const handler = () => count++;
    p.event('click', handler);
    p.click();
    expect(count).toBe(6);
    p.removeEvent('click', handler);
    p.click();
    expect(count).toBe(8);
});
