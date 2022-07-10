var climbStairs = function(n) {
    let one = 1
    let two = 1

    while (n > 1){
        let temp = one
        one += two
        two = temp
        n--
    }

    return one
};

console.log(climbStairs(5));