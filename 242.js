// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const wordSplit = s.split("");
    const anagramSplit = t.split("");

    for (const letter of wordSplit) {
        const anagramIndex = anagramSplit.findIndex(
            (anagramLetter) => anagramLetter === letter
        );

        if (anagramIndex !== -1) {
            anagramSplit.splice(anagramIndex, 1);
        }
    }

    return anagramSplit.length === 0;
};

console.log(isAnagram("ab", "a"));
