import { test, expect } from 'vitest';
// @ts-ignore
import { formatCSSKey } from '../src/helper';

test('util', () => {
    expect(formatCSSKey('border-left')).toBe('borderLeft');
    expect(formatCSSKey('border-left-width')).toBe('borderLeftWidth');
});
