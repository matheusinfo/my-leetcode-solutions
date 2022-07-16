var guess = function (num) {
    const pick = 1240808008;

    if (num > pick) {
        return -1;
    }

    if (num < pick) {
        return 1;
    }

    return 0;
};

var guessNumber = function (n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (guess(mid) === 0) {
            return mid;
        }

        if (guess(mid) === -1) {
            right = mid - 1;
        }

        if (guess(mid) === 1) {
            left = mid + 1;
        }
    }

    return left;
};

console.log(guessNumber(1792997410));
