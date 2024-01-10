// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */
// BRUTE FORCE
//  var longestPalindrome = function(s) {
//     const splitString = s.split('')
//     let maxPalindrome = ''
//     let currentPalindrome = ''

//     for(let i = 0; i < splitString.length; i++) {
//         currentPalindrome = ''

//         for(let j = i; j < splitString.length; j++) {
//             currentPalindrome = `${currentPalindrome}${splitString[j]}`

//             if(currentPalindrome === currentPalindrome.split('').reverse().join('')) {
//                 if(currentPalindrome.length > maxPalindrome.length){
//                     maxPalindrome = currentPalindrome
//                 }
//             }
//         }
//     }

//     return maxPalindrome
// };

var longestPalindrome = function(word) {
    let longestPalindrome = '';

    for (let counter = 0; counter < word.length; counter++) {
        const firstPalindrome = findLongestPalindrome(word, counter, counter);
        const secondPalindrome = findLongestPalindrome(word, counter, counter + 1);
        const currentPalindrome = firstPalindrome.length > secondPalindrome.length ? firstPalindrome : secondPalindrome;

        if (currentPalindrome.length > longestPalindrome.length) {
            longestPalindrome = currentPalindrome;
        } 
    }

    return longestPalindrome;
};

const findLongestPalindrome = (word, left, rigth) => {
    while((left >= 0) && (rigth < word.length) && (word[left] === word[rigth])) {
        left -= 1;
        rigth += 1;
    }

    return word.slice(left + 1, rigth);
}

console.log(longestPalindrome("babad"))