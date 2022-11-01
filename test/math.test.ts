// @vitest-environment node

import {increment} from '../src/math';
import {test, expect, describe} from 'vitest';

describe('math module', () => {
    test('0 increment equal 1', () => {
        expect(increment(0)).toBe(1);
    });
});
