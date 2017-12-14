export const fibo = (index: number) => {
    if (index <= 0) {
        return 0;
    }

    if (index === 1) {
        return 1;
    }

    return recurse(index - 1, 0, 1);
};

const recurse = (depthLeft: number, previousN: number, currentN: number): number => {
    if (depthLeft === 0) {
        return currentN;
    }

    return recurse(depthLeft - 1, currentN, previousN + currentN);
};
