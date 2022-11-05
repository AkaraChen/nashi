import { test, expect } from 'vitest';
import nashi from '../dist/index.js';

test('element', () => {
    document.body.innerHTML = '<div></div>';
    const div = document.querySelector('div')!;
    const ndiv = nashi('div');
    expect(ndiv.hasChild()).toBe(false);
    const p = document.createElement('p');
    const np = nashi(p);
    ndiv.lastChild(np);
    expect(ndiv.hasChild()).toBe(true);
    const span = document.createElement('span');
    const nspan = nashi(span);
    ndiv.firstChild(nspan);
    expect(ndiv.firstChild().toString()).toBe(nspan.toString());
    expect(div.firstChild).toBe(span);
    expect(div.lastChild).toBe(p);
    document.body.innerHTML = '<div>1</div><div>2</div>';
    const div2 = nashi('div')[1];
    const para = document.createElement('p');
    para.appendChild(document.createTextNode('para'));
    const para2 = document.createElement('p');
    para2.appendChild(document.createTextNode('para2'));
    div2.insertAfter(nashi([para, para2]));
    expect(nashi('body').child()[2].node[0]).toBe(para);
    expect(nashi('body').child()[3].node[0]).toBe(para2);
    const div3 = nashi('div')[0];
    div3.insertBefore(nashi([para, para2]));
    expect(nashi('body').child()[0].node[0]).toBe(para);
    expect(nashi('body').child()[1].node[0]).toBe(para2);
    nashi.create('p');
    expect(
        nashi.fromHTML(`<div>1</div>`).node[0].toString().includes('div')
    ).toBeTruthy();
});
