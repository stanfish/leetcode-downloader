/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mapObj={};
    for (var i=0; i <nums.length; i++ ){
        if (mapObj[nums[i+'']]) {
            return true;
        } else {
            mapObj[nums[i]+''] = true;
        }
    }
    return false;
};
