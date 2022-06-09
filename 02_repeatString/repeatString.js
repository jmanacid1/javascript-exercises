const repeatString = function(string,num) {
    let returnString = '';
    for (let i = 0; i < num; i++){
        returnString.concat(string);
    }
    console.log(returnString)
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
