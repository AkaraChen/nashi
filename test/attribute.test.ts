import nashi from '../dist/index';

const bindList = {
    accesskey: 'accesskey',
    class: 'className',
    html: 'innerHTML',
    id: 'id',
    text: 'innerText',
};

for (const key of Object.keys(bindList)) {
    test(`attr ${key}`, () => {
        const np = nashi.create('p');
        const p = np.node[0];
        np[key]('test');
        expect(np[key]()).toBe('test');
        expect(p[bindList[key]]).toBe('test');
    });
}

test('classList', () => {
    const np = nashi.create('p');
    np.addClass('add');
    expect(np.class()).toBe('add');
    np.removeClass('add');
    expect(np.class()).toBe('');
    np.toggleClass('toggle');
    expect(np.hasClass('toggle')).toBe(true);
    expect(np.class()).toBe('toggle');
    np.toggleClass('toggle');
    expect(np.class()).toBe('');
    expect(np.hasClass('toggle')).toBe(false);
});

test('attr', () => {
    const ninput = nashi.create('input');
    ninput.attr('type', 'button');
    expect(ninput.attr('type')).toBe('button');
    expect(ninput.node[0].getAttribute('type')).toBe('button');
});

test('prop', () => {
    const ndiv = nashi.create('div');
    const div = ndiv.node[0];
    ndiv.id('div');
    expect(ndiv.prop('id')).toBe('div');
    ndiv.prop('id', 'foo');
    expect(ndiv.prop('id')).toBe(div.id);
    expect(ndiv.prop('id')).toBe('foo');
});

test('removeAttribute', () => {
    const ndiv = nashi.create('dibs');
    ndiv.id('test');
    expect(ndiv.id()).toBe('test');
    ndiv.removeAttr('id');
    expect(ndiv.id()).toBe('');
});
