import { test, expect } from 'vitest';
import nashi from '../src/index.js';

test('attr', () => {
    document.body.innerHTML = '<p>test</p>';
    const p = document.querySelector('p')!;
    const np = nashi('p');
    np.text('noop');
    expect(p.innerText).toBe('noop');
    expect(np.text()).toBe('noop');
    np.addClass('test');
    expect(p.className).toBe('test');
    expect(np.class()).toBe('test');
    np.removeClass('test');
    expect(p.className).toBe('');
    expect(np.class()).toBe('');
    np.prop('class', 'noop');
    expect(np.hasClass('noop')).toBe(true);
    expect(np.prop('class')).toBe('noop');
    expect(p.className).toBe('noop');
    expect(np.html()).toBe('noop');
    np.toggleClass('noop');
    expect(np.hasClass('noop')).toBe(false);
});
