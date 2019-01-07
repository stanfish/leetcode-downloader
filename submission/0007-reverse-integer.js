/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign=1;
    if (x<0){
        sign=-1;
        x*=-1;
    }
    var result='';
    for(var i=0;i<(x+'').length;i++){
        result=(x+'').substr(i,1)+result;
    }
    
    return sign*(parseInt(result)>2147483648?0:parseInt(result));
};
