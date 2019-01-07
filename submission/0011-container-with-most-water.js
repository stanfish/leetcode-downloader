/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
    
//     let reVal = 0;
//     height.every((h,i)=>{      

//         if ((height.length-1-i) * h > reVal) {
//             let maxA = 0;
//             for (var j=i+1; j<height.length; j++){
//                 let area = (j-i) * Math.min(h,height[j]);
//                 maxA = Math.max(maxA, area);
//             }

//             reVal = Math.max(maxA, reVal); 
            
//         }
//         return true;
        
//     });
//     return reVal;
// };



var maxArea = function(height) {
    if (height.length<2){
        return 0;
    }
    
    let left = 0;
    let right = height.length-1;
    
    let maxA = 0;
    
    while(left<right) {
        
        let diff = right - left;
        let area = diff * Math.min(height[left], height[right]); 
        maxA = Math.max(area, maxA);
    
        if (height[left]<height[right]) {
            left++;
        } else {
            right--;
        }
          
          
    }
    
    return maxA;
    
    
};
