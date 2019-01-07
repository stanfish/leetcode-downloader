/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result=[];
    nums.forEach(function(num,ind){
       nums.slice(1+ind).forEach(function(num2,ind2){
           if (num+num2 === target) {
               result=[ind,ind2+ind+1];
           }
       }); 
    });
    return result;
};
