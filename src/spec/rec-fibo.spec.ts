import {
    fibo
} from '../rec-fibo';

const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe('fibo', () => {
    it('returns correct numbers', () => {
        expectedSequence.forEach((expected, index) => {
            expect(fibo(index)).toEqual(expected);
        });
    });
});
