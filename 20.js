// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

 const EquivalenceCharacter = Object.freeze({
    '(': ')',
    '[': ']',
    '{': '}',
})

const charactersPossibilit = [
    '(', 
    '{',
    '['
]

 var isValid = function(s) {
    const strigDivided = s.split('') 
    const charactersFound = []

    for(let count = 0; count < strigDivided.length; count++){
        const actualString = strigDivided[count]

        if(charactersPossibilit.includes(actualString)){
            charactersFound.push(actualString)
        }else {
            const lastCharacter = charactersFound[charactersFound.length - 1]

            if(EquivalenceCharacter[lastCharacter] !== actualString){
                return false
            }

            charactersFound.pop()
        }
    }

    return charactersFound.length === 0
};

console.log(isValid('([])'))