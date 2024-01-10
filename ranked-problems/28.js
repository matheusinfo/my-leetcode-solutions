// Input: haystack = "hello", needle = "ll"
// Output: 2
var strStr = function(haystack, needle) {    
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};

console.log(strStr('mississippi', 'issip'))