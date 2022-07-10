/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var getRow = function(rowIndex) {
    var pascal = [];
    
    for (let counter = 0; counter <= rowIndex; counter++) {
        pascal[counter] = [];
        pascal[counter][0] = 1;

        for (var aux = 1; aux < counter; aux++) {
            pascal[counter][aux] = pascal[counter-1][aux-1] + pascal[counter-1][aux]
        }

        pascal[counter][counter] = 1;
    }

    return pascal[rowIndex];
};

console.log(getRow(4));
