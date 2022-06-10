const sumAll = function(num1, num2) {
    let sum = 0;
    largerNum = undefined;

    if(num1 < 0 || num2 <0 || typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return "ERROR"
        }
    
    else if (num1 > num2){
        let largerNum = num1;
        let smallerNum = num2; 
        for (let i = largerNum; i>=smallerNum; i--){
            sum += i;
        }
    }
    else{
        let largerNum = num2;
        let smallerNum = num1;
        for (let i = largerNum; i>=smallerNum; i--){
            sum += i;
        }
    }
    
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
