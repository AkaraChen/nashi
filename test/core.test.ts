import nashi from '../dist/index';

const content = nashi.fromHTML('<p></p>'.repeat(5));
nashi('body').append(content);

test('length', () => {
    expect(nashi('p').length).toBe(5);
    expect(nashi('p').node.length).toBe(nashi('p').length);
});

test('number index', () => {
    const p = document.querySelectorAll('p')[3];
    expect(nashi('p')[3].node[0]).toBe(p);
});

test('iterator', () => {
    const np = nashi('p');
    let count = 0;
    for (const item of np) {
        item.text(String(count++));
    }
    for (const [index, item] of [...document.querySelectorAll('p')].entries()) {
        // eslint-disable-next-line unicorn/prefer-dom-node-text-content
        expect(item.innerText).toBe(String(index));
    }
});
