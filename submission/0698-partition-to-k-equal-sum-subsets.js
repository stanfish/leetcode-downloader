/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    nums.sort((a,b)=>(b-a));
    let sum = nums.reduce((total, num)=>(total+num), 0);
    if (!Number.isInteger(sum / k)) { return false; }
    let eachSum = sum / k;
    let bucket = Array(k);
    bucket.fill(0,0);
    return checkPossible(nums, bucket, eachSum);
};

var checkPossible = function(sumList, bucketList, eachSum) {
    if (sumList.length == 0) {
        return true;
    }
    let tryNum = sumList[0];
    for (var i = 0; i < bucketList.length; i++) {
        let success = false;
        if (bucketList[i]+tryNum <= eachSum) {
            let newBucketList = bucketList.slice();
            newBucketList[i]+=tryNum;
            success = checkPossible(sumList.slice(1),newBucketList, eachSum);
        }
        if (success) {
            return true;
        }
    }
    return false;
}
