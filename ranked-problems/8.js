var myAtoi = function(s) {
    const splitInput = s.trim().split('')
    let result = ''
    let counter = 0

    if(['-', '+'].includes(splitInput[0])){
        result += splitInput[0]
        counter++
    }

    for(counter; counter < splitInput.length; counter++) {
        if(!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(splitInput[counter])) break

        result += splitInput[counter]
    }

    const formattedResult = Number(result)
    
    if(isNaN(formattedResult)) return 0

    if(formattedResult > 2147483647) return 2147483647

    if(formattedResult < -2147483648) return -2147483648
    
    return formattedResult
}

console.log(myAtoi('-3-'))
