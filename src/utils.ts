export const binarySwap = (array: number[], indexA: number, indexB: number): void => {
    array[indexA] = array[indexA] ^ array[indexB];
    array[indexB] = array[indexB] ^ array[indexA];
    array[indexA] = array[indexA] ^ array[indexB];
};
