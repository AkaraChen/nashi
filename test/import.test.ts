import nashi from '../dist/common';

test('commonjs', () => {
    expect(nashi.create('p').length).toBe(1);
});
