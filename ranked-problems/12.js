// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

const intToRomanObject = Object.freeze({
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
});

var intToRoman = function (num) {
    let pos = 0;
    let roman = "";
    const possibles = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    while (num > 0) {
        if (num >= possibles[pos]) {
            num -= possibles[pos];
            roman += intToRomanObject[possibles[pos]];
        } else {
            pos++;
        }
    }

    return roman;
};

intToRoman(1994);
