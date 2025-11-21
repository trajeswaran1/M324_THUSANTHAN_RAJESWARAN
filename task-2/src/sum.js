export function sum(a, b) { return a + b; }
if (import.meta.url === `file://${process.argv[1]}`) console.log(sum(2, 3));
