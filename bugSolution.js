function foo(a, b) {
  a = a === null || a === undefined ? 0 : a; // Handle null or undefined inputs
  b = b === null || b === undefined ? 0 : b;
  return a + b;
}

function bar(c, d) {
  c = c === null || c === undefined ? 0 : c;
  d = d === null || d === undefined ? 0 : d;
  return foo(c, d) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(2, null)); // Output: 4
console.log(bar(null, null));// Output: 0