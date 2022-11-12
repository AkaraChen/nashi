import { formatCSSKey } from '../src/style/util';

test('util', () => {
    expect(formatCSSKey('border-left')).toBe('borderLeft');
    expect(formatCSSKey('border-left-width')).toBe('borderLeftWidth');
});
