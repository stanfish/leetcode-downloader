const romanMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function calcVal(s) {
    var reVal=0;
    let lastChar='';
    
    for (var i=0; i<s.length ; i++) {
        var c = s[i];

        if (!lastChar) {
            lastChar = c;
            reVal = romanMap[c];
        }
        else if (lastChar === c) {
            reVal += romanMap[c];
        } else if (romanMap[lastChar]< romanMap[c]) {
            reVal = romanMap[c] - reVal;
        } else {
            reVal += romanMap[c];
            lastChar = c;
        }
    }
      
    
    return reVal;
}


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let reVal = 0;
    let storeStr='';
    let lastChar='';
    
    for (var i=0; i<s.length ; i++) {
        var c = s[i];

        if (!lastChar) {
            lastChar = c;
            storeStr += c; 
        }
        else if (lastChar === c) {
           storeStr += c; 
        } else if (romanMap[lastChar]< romanMap[c]) {
            storeStr += c; 
            reVal += calcVal(storeStr);
            storeStr='';
            lastChar='';
        } else {
            reVal += calcVal(storeStr);
            storeStr = c; 
            lastChar = c;
        }
    }
    
    
    if (storeStr) {
        reVal += calcVal(storeStr);
    }
    
    return reVal;
};
