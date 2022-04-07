export const factorialOf = (n: number): number => {
    console.log(`factorialOf(${n}) called!`);
    return n <= 0 ? 1 : n * factorialOf(n - 1);
};