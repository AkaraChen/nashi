import { test, expect } from 'vitest';
import nashi from '../dist/index.js';

test('style', () => {
    document.body.innerHTML = '<div></div>';
    const div = document.getElementsByTagName('div')[0];
    const ndiv = nashi('div');
    ndiv.style('width', '200px');
    expect(ndiv.style('width')).toBe('200px');
    expect(div.style.width).toBe('200px');
    ndiv.css('border-width', '2px');
    expect(ndiv.css('border-width')).toBe('2px');
    expect(div.style.borderWidth).toBe('2px');
});
