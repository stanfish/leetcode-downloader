/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    var reVal = parseInt(str);
    
    if (isNaN(reVal)) {
        reVal=0;
    }
    
    var maxVal = Math.pow(2,31) - 1;
    var minVal = -1 * (maxVal+1);
    
    
    reVal = Math.max(reVal, minVal);
    reVal = Math.min(reVal, maxVal);

    
    return reVal;
};
