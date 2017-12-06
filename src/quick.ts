import {
    binarySwap
} from './utils';

export const sort = (array: number[]): void => {
    quickSort(array, 0, array.length - 1);
};

const quickSort = (array: number[], lo: number, hi: number): void => {
    if (lo < hi) {
        const partitionIndex = getPartitionIndex(array, lo, hi);
        quickSort(array, lo, partitionIndex);
        quickSort(array, partitionIndex + 1, hi);
    }
};

const getPartitionIndex = (array: number[], lo: number, hi: number): number => {
    const pivot = array[lo];
    let i = lo - 1;
    let j = hi + 1;
    while (true) {
        do {
            i = i + 1;
        } while (array[i] < pivot);
        do {
            j = j - 1;
        } while (array[j] > pivot);
        if (i >= j) {
            return j;
        }
        binarySwap(array, i, j);
    }
};
