import { extend } from './core';

extend(
    'text',
    function set(string) {
        this.innerText = string;
    },
    function get() {
        return this.innerText;
    }
);
