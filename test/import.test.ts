import nashi from '../dist/common';

test('commonjs', async () => {
    expect(nashi.create('p').length).toBe(1);
});
