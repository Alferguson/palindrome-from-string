`use strict`
// example of palindrome: racecar
function palindrome(str) {
    if (!str[1]) {
        console.log("This is a palindrome");
    }
    else if (str[0] === str[str.length-1]) {
        str = str.slice(1, str.length-1);
        return palindrome(str);
    }
    else {
        console.log("this is def not a palindrome");
    }
};

palindrome("YYY");
// palindrome("dingus");
// palindrome("x");