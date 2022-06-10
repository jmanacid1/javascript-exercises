const ftoc = function(temp) {
  if(typeof(temp) !== "number"){
    return 'ERROR'
  }
  let cTemp = (temp-32) * (5/9);
  let roundedCTemp = +cTemp.toFixed(1)
  return roundedCTemp
};

const ctof = function(temp) {
  if(typeof(temp) !== "number"){
    return 'ERROR'
  }
  let fTemp = (temp * (9/5)) + 32;
  let roundedFTemp = +fTemp.toFixed(1)
  return roundedFTemp

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
