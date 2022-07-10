const RomanNumbers = Object.freeze({
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
})

var romanToInt = function(s) {
    let sum = 0
    const separatedNumbers = s.split('')

    for(let count = separatedNumbers.length - 1; count >= 0 ; count--) {
        const actualNumber = RomanNumbers[separatedNumbers[count]]
        const nextNumber = RomanNumbers[separatedNumbers[count - 1]]

        if(actualNumber > nextNumber) {
            sum += actualNumber - nextNumber
            count --
        }else {
            sum += actualNumber
        }
    }

    return sum
};

romanToInt("MCMXCIV")

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.