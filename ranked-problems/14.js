// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    strs.map(str => {
        for(let count = 0; count < prefix.length; count++){
            if(prefix[count] !== str[count]){
                console.log({ antes: prefix })
                prefix = prefix.substring(0, count)
                console.log({ dps: prefix })
                break
            }
        }
    })
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","fleght"]))