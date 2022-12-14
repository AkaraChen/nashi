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
    let count = 0;
    for (const item of nashi('p')) {
        expect(item.text()).toBe('');
        count++;
    }
    expect(count).toBe(5);
});

test('array', () => {
    const p = nashi('p');
    p.text('0');
    p.each((item, index) => {
        item.text(String(index));
    });
    p.each((item, index) => {
        expect(item.text()).toBe(String(index));
    });
});
