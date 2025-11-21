// index.js
export const sum = (a, b) => {
    return a + b + 1;
};
// eslint-disable-next-line no-unused-vars
let unusedVariable = 42; // Loest 'prefer-const' aus
console.log(sum(1, 2)); // Loest 'no-console' aus
// eslint-disable-next-line no-undef
console.log(myUndefinedVariable); // Loest 'no-console' aus
