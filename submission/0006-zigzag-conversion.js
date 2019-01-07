/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var rows = [];
    for (var i=0; i<numRows; i++) {
        rows.push('');
    }
    var j=0;
    var down = true;
    
    for (var k=0; k<s.length;k++){
        var c = s.charAt(k);
    //s.split('').forEach(c=>{
       if (down && j<numRows){
           rows[j]+=c;            
           j++;
       } 
       else if (down && j==numRows) {
           j-=2;
           down = false;
           rows[j]+=c;    
           if (j===0){
               down=true;
               j++;
           } else {j--};
       }
        else if (!down && j>0){
            rows[j]+=c;     
            j--;
        }
        else if (!down && j==0){
            rows[j]+=c;    
            j++;
            down=true;
        }
        
    }
    
    
    var reSt='';
    rows.forEach(row=>{
       reSt += row; 
    });
    
    return reSt;
    
};
