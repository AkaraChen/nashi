import nashi from '../dist/index';

const content = nashi.fromHTML('<p></p>'.repeat(5));
nashi('body').append(content);

test('length', () => {
    expect(nashi('p').length).toBe(5);
    expect(nashi('p').node.length).toBe(nashi('p').length);
});

test('number index', () => {
    const p = document.getElementsByTagName('p')[3];
    expect(nashi('p')[3].node[0]).toBe(p);
});

test('iterator', () => {
    const np = nashi('p');
    let count = 0;
    for (const item of np) {
        item.text(String(count++));
    }
    Array.from(document.getElementsByTagName('p')).forEach((item, index) => {
        expect(item.innerText).toBe(String(index));
    });
});
