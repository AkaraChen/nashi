import nashi from '../dist/index';

const $ = (argument: string) => document.querySelector(argument);
const container = nashi.create('div');
const body = nashi('body');
body.append(container);

test('has child', () => {
    expect(container.hasChild()).toBe(false);
});

test('insert child', () => {
    const np = nashi.create('p');
    container.lastChild(np);
    const nspan = nashi.create('span');
    container.firstChild(nspan);
    expect(nashi.equal(container.firstChild(), nspan)).toBe(true);
    expect(container.firstChild().node[0]).toStrictEqual($('span'));
    expect(nashi.equal(container.lastChild(), np)).toBe(true);
    expect(container.lastChild().node[0]).toStrictEqual($('p'));
});

test('parent', () => {
    expect(container.parent().node).toStrictEqual(body.node);
});

test('child', () => {
    expect(container.child().node).toStrictEqual(container.node[0].childNodes);
});

test('insert sibling', () => {
    const para1 = nashi.create('p');
    const para2 = nashi.create('p');
    container.before(para1);
    container.after(para2);
    expect(nashi.equal(body.firstChild(), para1)).toBe(true);
    expect(nashi.equal(body.lastChild(), para2)).toBe(true);
});

test('siblings', () => {
    const para1 = body.firstChild();
    const para2 = body.lastChild();
    const merged = nashi.merge(para1, para2);
    const siblings = container.siblings();
    expect(nashi.equal(siblings[0], para1)).toBe(true);
    expect(nashi.equal(siblings[1], para2)).toBe(true);
    expect(nashi.equal(siblings, merged)).toBe(true);
});

test('get siblings', () => {
    const para1 = body.firstChild();
    const para2 = body.lastChild();
    expect(nashi.equal(para1, container.prev()));
    expect(nashi.equal(para2, container.next()));
});

test('element index', () => {
    expect(container.index()).toBe(1);
});

test('remove', () => {
    container.remove();
    expect(body.child().length).toBe(2);
});

test('empty', () => {
    const div = nashi.create('div');
    div.append(nashi.create('p')).empty();
    expect(div.child().length).toBe(0);
});

test('toggle', () => {
    const div = nashi.create('div');
    div.toggle();
    expect(div.style('display')).toBe('none');
    div.toggle();
    expect(div.style('display')).toBe('');
});

test('draggable', () => {
    const label = nashi.create('label');
    expect(label.draggable()).toBeNull();
    label.draggable(true);
    expect(label.draggable()).toBe(true);
    label.draggable(false);
    expect(label.draggable()).toBe(false);
});

test('wrap', () => {
    const p = nashi.create('p');
    nashi('body').append(p);
    p.wrap('div');
    expect(p.parent().node[0].toString().includes('div')).toBe(true);
});

test('unwrap', () => {
    const div = nashi.create('div');
    nashi('body').append(div);
    const p = nashi.create('p');
    div.append(p);
    div.unwrap();
    expect(div.hasChild()).toBe(false);
});

test('tag', () => {
    expect(nashi.create('p').tag()).toBe('p');
});
