/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0){
        return [];
    }    
    let reArr = [];
    for (let i=1; i<=numRows; i++) { 
        let prevRow = (i>1 ? reArr[reArr.length-1].slice() : null);
        reArr.push(generateRow(i, prevRow));
    }
    
    return reArr;
    
};


var generateRow = function(numRows, prevRow) {

    if (numRows === 1){
        return [1];
    }    
    if (numRows === 2){
        return [1,1];
    }        
    
    let reArr = prevRow? prevRow : generateRow(numRows-1);
    
    
    for (let i=0; i<reArr.length-1; i++) {    
        reArr[i] += reArr[i+1];
    }
    
    reArr.unshift(1);
        
    return reArr;    
    
};
