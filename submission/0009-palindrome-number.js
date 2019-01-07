/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) {return false;}
    else if (x===0){return true;}
    else {
        var xStr = ''+x;
        var xArr = xStr.split('');
        var rStr = xArr.reverse().join('');
        return xStr === rStr;
    }
};
