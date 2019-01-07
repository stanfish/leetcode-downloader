/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i=0; i<nums.length; i++) {
        let num = nums[i];        
        for (j=0; j<k && i+1+j<nums.length ; j++) {
            if (nums[i+1+j]!==undefined && (nums[i+1+j] <= num+t && nums[i+1+j] >= num-t)) {
                //console.log(num,nums[i+1+j], nums[i+1+j] <= num+t, nums[i+1+j] >= num-t);
                
                return true;
            }
        }
    }
    return false;
};
