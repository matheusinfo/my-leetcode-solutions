// Input: num = 16
// Output: true

var isPerfectSquare = function (num) {
    for (var i = 1; i <= num; i++) {
        const square = i * i;
        if (square === num) {
            return true;
        }

        if (square > num) {
            return false;
        }
    }
};

console.log(isPerfectSquare(14));
