
// Iterative solution
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

// Recursive solution
function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibsRec(n - 1);
    return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
}

// Tests
console.log("Using Iteration (8):", fibs(8));
console.log("Using Recursion (8):", fibsRec(8));

console.log("Using Iteration (5):", fibs(5));
console.log("Using Recursion (5):", fibsRec(5));
