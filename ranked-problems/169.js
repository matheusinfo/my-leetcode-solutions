// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let result = 0
//     let maxValue = 0
//     const valuesCount = {}

//     nums.map(num => {
//         if(valuesCount[num]){
//             valuesCount[num]++
//         }else {
//             Object.assign(valuesCount, { [num]: 1 })
//         }
//     })

//     for (var key in valuesCount) {
//         if(valuesCount[key] > maxValue){
//             maxValue = valuesCount[key]
//             result = Number(key)
//         }
//     }

//     return result
// };

var majorityElement = function(nums) {
    const elements = []
    let result = 0
    let maxValue = 0

    for(const num of nums){
        elements[num] ? elements[num]++ : elements[num] = 1

        if(elements[num] > maxValue){
            maxValue = elements[num]
            result = num
        }
    }

    return result
};

console.log(majorityElement([6, 5, 5]))