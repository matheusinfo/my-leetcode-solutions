// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    const separatedNumber = x.toString().split('')

    for(let count = 0; count < separatedNumber.length; count++) {
        if(separatedNumber[count] !== separatedNumber.reverse()[count]){
            return false
        }
    }
    
    return true
};

console.log(isPalindrome(1212))