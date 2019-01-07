/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i=0; i<nums.length; i++) {
        let num = nums[i];        
        for (j=0; j<k && i+1+j<nums.length ; j++) {
            if (nums[i+1+j]!==undefined && nums[i+1+j] === num) {
                return true;
            }
        }
    }
    return false;
};
