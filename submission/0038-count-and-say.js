/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let startVal = '1';
    if (n===1){
        return startVal;
    }
    return countSt(countAndSay(n-1));
};

var countSt = function(st){
    
    var counting = false;
    var reSt = '';
    var countingVal=null, countingCount;
    for(let j=0; j<st.length; j++){
        if (countingVal !== null && st.charAt(j)===countingVal){
            counting=true;
        } else if (counting && st.charAt(j)!==countingVal){
            reSt+=countingCount+''+countingVal;
            counting=false;
        }
        
       // console.log({st,j,reSt});
        if(!counting){
            countingVal = st.charAt(j);
            countingCount = 1;
            counting=true;
        } else {
            countingCount++;
        }
        
        
        
    }
    
    reSt+=countingCount+''+countingVal;
    return reSt;
    
    
};
