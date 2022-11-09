import { formatCSSKey } from '../src/helper.js';

test('util', () => {
    expect(formatCSSKey('border-left')).toBe('borderLeft');
    expect(formatCSSKey('border-left-width')).toBe('borderLeftWidth');
});
