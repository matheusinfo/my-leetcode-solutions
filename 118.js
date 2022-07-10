/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var pascal = [];
    
    for (let counter = 0; counter < numRows; counter++) {
        pascal[counter] = [];
        pascal[counter][0] = 1;

        for (var aux = 1; aux < counter; aux++) {
            pascal[counter][aux] = pascal[counter-1][aux-1] + pascal[counter-1][aux]
        }

        pascal[counter][counter] = 1;
    }

    return pascal;
};

console.log(generate(5));
