import {
    sort
} from '../merge';

const array = [3, 7, 8, 5, 2, 1, 9, 5, 4];
const sortedArray = array.slice().sort();

describe('quick', () => {
    it('sorts', () => {
        expect(sort(array)).toEqual(sortedArray);
    });
});
