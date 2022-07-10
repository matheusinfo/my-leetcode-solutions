/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const value = Math.abs(x).toString().split('').reverse().join('')
    if(value > 0x7FFFFFFF) return 0
    return x > 0 ? value : -1 * value
};

console.log(reverse(-123))

