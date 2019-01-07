/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let len = nums.length;
    let i=0,j=1;
    let temp=nums[0];
    while (j<nums.length) {
        if (nums[i] === nums[j]) {
            len--;
        } else {
            i++;
            nums[i] = nums[j];
        }
        
        j++;
    }
    
  
    
    return len;
};
