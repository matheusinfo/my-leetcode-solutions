// Input: s = "leetcode"
// Output: 0

var firstUniqChar = function(s) {
    const result = {}
   
    s.split('').map(letter => result[letter] = (result[letter] || 0) + 1)

    for (let key in result) {
        if(result[key] === 1) {
            return s.indexOf(key)
        }
    }

    return -1
};

console.log(firstUniqChar("dddccdbba"));