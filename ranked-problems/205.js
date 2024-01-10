// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// Input: s = "foo", t = "bar"
// Output: false

// Input: s = "paper", t = "title"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = new Map();

    for (let counter = 0; counter < s.length; counter++) {
        if (map.has(s[counter]) && map.get(s[counter]) !== t[counter]) {
            return false;
        }

        map.set(s[counter], t[counter]);
    }

    return map.size === new Set(map.values()).size;
};

console.log(isIsomorphic("badc", "baba"));
