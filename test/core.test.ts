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
