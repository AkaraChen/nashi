import nashi from '../dist/index';

const ncontainer = nashi.create('div');
const container = ncontainer.node[0];
nashi('body').firstChild(ncontainer);

test('style', () => {
    ncontainer.style('width', '500px');
    expect(ncontainer.style('width')).toBe('500px');
    expect(container.style.width).toBe('500px');
    ncontainer.css('border-width', '2px');
    expect(ncontainer.css('border-width')).toBe('2px');
    expect(container.style.borderWidth).toBe('2px');
});
