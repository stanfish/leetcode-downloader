/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var all=[];
    all[0]=1;
    all[1]=2;
    for(var i=2; i<n; i++){
        all[i]=all[i-1]+all[i-2];
    }
    
    return all[n-1];
};
