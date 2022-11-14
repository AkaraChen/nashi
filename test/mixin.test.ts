import nashi from '../dist/index';

const content = nashi.fromHTML('<p></p>'.repeat(5));
nashi('body').append(content);
const p = document.querySelectorAll('p');

test('length', () => {
    expect(nashi('p').length).toBe(5);
    expect(nashi('p').node.length).toBe(nashi('p').length);
});

test('number index', () => {
    expect(nashi('p')[3].node[0]).toBe(p[3]);
});

test('iterator', () => {
    const np = nashi('p');
    let count = 0;
    for (const item of np) {
        item.text(String(count++));
    }
    for (const [index, item] of [...p].entries()) {
        expect(item.textContent).toBe(String(index));
    }

    Array.prototype.forEach.call(np, () => {});
});

test('array at', () => {
    expect(content.first().node[0]).toBe(p[0]);
    expect(content.last().node.at(-1)).toBe([...p].at(-1));
    expect(content.at(4).node[0]).toBe(p[4]);
});

test('filter', () => {
    const filtered = content.filter((element) => {
        return element.text() === '1';
    });
    expect(filtered.length).toBe(1);
});

test('find', () => {
    const found = content.find((element) => {
        return element.text() === '1';
    });
    expect(found.length).toBe(1);
});

test('pop', () => {
    const two = nashi.fromHTML('<div></div>'.repeat(2));
    expect(two.length).toBe(2);
    expect(two.pop().node[0].toString().includes('div')).toBe(true);
    expect(two.length).toBe(1);
});

test('shift', () => {
    const two = nashi.fromHTML('<div></div>'.repeat(2));
    expect(two.shift().node[0].toString().includes('div')).toBe(true);
    expect(two.length).toBe(1);
});

test('splice', () => {
    const div = document.createElement('div');
    const splice = content.splice(1, 3, div);
    expect(splice.length).toBe(3);
    expect(splice[0].node[0]).toBe(p[1]);
    expect(splice[1].node[0]).toBe(p[2]);
    expect(content.length).toBe(3);
    expect(content[1].node[0]).toBe(div);
});
