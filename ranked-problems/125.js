var isPalindrome = function(s) {
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,._`';";
    var formatted  = s.replaceAll(' ', '').replaceAll('"', '').toLowerCase()

    for (var i = 0; i < specialChars.length; i++) {
      formatted = formatted.replace(new RegExp("\\" + specialChars[i], "gi"), "");
    }

    console.log({ formatted })

    return formatted === formatted.split("").reverse().join("")
};

console.log(isPalindrome("I, man, am regal; a German am I."));