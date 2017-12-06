// Top-down implementation using lists
export const sort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    const left: number[] = [];
    const right: number[] = [];

    array.forEach((value, index) => {
        if (index < array.length / 2) {
            left.push(value);
        } else {
            right.push(value);
        }
    });

    return merge(sort(left), sort(right));
};

const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length > 0) {
        result.push(left.shift());
    }
    while (right.length > 0) {
        result.push(right.shift());
    }

    return result;
};
