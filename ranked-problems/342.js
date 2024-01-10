// Input: n = 16
// Output: true

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

var isPowerOfFour = function(n) {
    return n > 0 && Math.log2(n) % 2 === 0;
};

console.log(isPowerOfFour(9))