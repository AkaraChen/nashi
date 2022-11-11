import { extend, alias } from './core';
import { event } from './helper';

extend('event', {
    set(event, handler) {
        this.addEventListener(event, handler);
    },
});

alias('on', 'event');

extend('trigger', {
    set(event) {
        if (typeof event === 'string') {
            event = new Event(event);
        }

        this.dispatchEvent(event);
    },
});

extend('removeEvent', {
    set(event, handler) {
        this.removeEventListener(event, handler);
    },
});

extend('hover', {
    set(handler) {
        this.addEventListener('mouseenter', handler);
        this.addEventListener('mouseleave', handler);
    },
});

event('blur');
event('focus');
event('focusin');
event('focusout');
event('change');
event('click');
event('contextmenu');
event('dblclick');
event('error');
event('keydown');
event('keypress');
event('keyup');
event('mousedown');
event('mouseenter');
event('mouseleave');
event('mousemove');
event('mouseout');
event('mouseover');
event('mouseup');
event('resize');
event('scroll');
event('select');
event('submit');
event('input');
event('invalid');
event('reset');
