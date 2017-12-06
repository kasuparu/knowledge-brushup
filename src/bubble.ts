import {
    binarySwap
} from './utils';

export const sort = (array: number[]): void => {
    let more = true;

    while (more) {
        more = false;
        for (let index = 1; index < array.length; index++) {
            if (array[index - 1] > array[index]) {
                binarySwap(array, index - 1, index);
                more = true;
            }
        }
    }
};
