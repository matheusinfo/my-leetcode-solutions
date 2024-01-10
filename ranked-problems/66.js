// Input: digits = [1,2,3]
// Output: [1,2,4]
 var plusOne = function(digits) {
    let splitDigit = ''

    digits.toString().split(',').map(digit => splitDigit += digit)

    const number = BigInt(splitDigit) + BigInt(1)

    return number.toString().split('')
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))