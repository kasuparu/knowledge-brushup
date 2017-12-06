import {
    sort
} from '../bubble';

const array = [4, 6, 1, 3, 8, 7, 2];
const sortedArray = array.slice().sort();

describe('bubble', () => {
    it('sorts', () => {
        const arrayCopy = array.slice();
        sort(arrayCopy);
        expect(arrayCopy).toEqual(sortedArray);
    });
});
