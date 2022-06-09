const reverseString = function(string1) {
    let splitString = [];
    for (let i = 0; i < string1.length; i++){
        splitString.push(string1.charAt(i))
    }
    let reversedString = splitString.reverse();
    let joinedString = reversedString.join('');
    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
