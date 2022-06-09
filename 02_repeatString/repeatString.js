const repeatString = function(string,num) {
    let returnString = '';
    if (num < 0){
        return 'ERROR'
    }
    for (let i = 0; i < num; i++){
        returnString = returnString.concat(string);
    }
    console.log(returnString)
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
