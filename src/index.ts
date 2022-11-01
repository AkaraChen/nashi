import {increment} from './math';

export const greet = (name = 'World') => console.log(`Hello, ${name}!`);

export default increment(0);
