/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openArr = [];
    const mapObj = {
      '(':  {open:true, type:0},
      ')':  {open:false, type:0},  
      '{':  {open:true, type:1},
      '}':  {open:false, type:1},  
      '[':  {open:true, type:2},
      ']':  {open:false, type:2}
    };
    for (var i=0; i<s.length; i++){
        if (mapObj[s.charAt(i)].open) {
            openArr.push(mapObj[s.charAt(i)]);
        } else {
            let lastOpen = openArr.pop();
            if (!lastOpen || mapObj[s.charAt(i)].type !== lastOpen.type) {
                return false;
            }
            
        }
        
        
    }
    
    return openArr.length===0;
    
    
};
