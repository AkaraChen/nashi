import nashi from '../dist';

test('util create', () => {
    expect(nashi.create('p').node[0].tagName.toLowerCase()).toBe('p');
});

test('util fromHTML', () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const image = (source: string) => `<img src=${source}></img>`;
    const img = nashi.fromHTML(image('test'));
    expect(img.prop('src')).toBe('test');
});

test('util equal', () => {
    const para1 = nashi.create('p');
    const para2 = nashi.create('p');
    expect(nashi.equal(para1, para1)).toBe(true);
    expect(nashi.equal(para1, para2)).toBe(false);
    const paras1 = nashi([para1.node[0], para2.node[0]]);
    const paras2 = nashi([para2.node[0], para1.node[0]]);
    expect(nashi.equal(paras1, paras2)).toBe(true);
    expect(nashi.equal(paras1, para1)).toBe(false);
});

test('util merge', () => {
    const para1 = nashi.create('p');
    const para2 = nashi.create('p');
    const merge1 = nashi.merge(para1, para2);
    expect(nashi.equal(merge1[0], para1)).toBe(true);
    expect(nashi.equal(merge1[1], para2)).toBe(true);
    const merge2 = nashi.merge(para1, para1);
    expect(merge2.length).toBe(1);
});
