import nashi from '../dist/index';

const content = nashi.fromHTML('<p></p>'.repeat(5));
nashi('body').append(content);

test('init', () => {
    document.body.append(document.createElement('div'));
    expect(nashi('div').length).toBe(1);
    const element = document.createElement('div');
    nashi(element).text('114514');
    expect(element.textContent).toBe('114514');
    const p = document.querySelectorAll('p');
    expect(nashi(p).length).toBe(5);
    const array = Array.from(p);
    expect(nashi(array).length).toBe(5);
});

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
