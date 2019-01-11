/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let ind=0; ind<nums.length; ind++) {
        let num=nums[ind];
        let numRest = nums.slice(1+ind);
        for (let ind2=0; ind2<numRest.length; ind2++) {
           let num2=numRest[ind2];
           if (num+num2 === target) {
               return  [ind,ind2+ind+1];
           }
       } 
    }
    return [];
};
