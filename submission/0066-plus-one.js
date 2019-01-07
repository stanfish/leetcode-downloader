/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // let number = digits.reduce((acc,cur,idx) => acc+cur*Math.pow(10,digits.length-1-idx) , 0);
    // return ((number++) +'').split('');
    var done = false;
    for (var i=digits.length-1; i>=0 && !done; i--){
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            done = true;
        }
    }
    if (!done) {
        digits.unshift(1);
    }
    
    return digits;
    
};
