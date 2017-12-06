import {
    sort
} from '../quick';

const array = [3, 7, 8, 5, 2, 1, 9, 5, 4];
const sortedArray = array.slice().sort();

describe('quick', () => {
    it('sorts', () => {
        const arrayCopy = array.slice();
        sort(arrayCopy);
        expect(arrayCopy).toEqual(sortedArray);
    });
});
