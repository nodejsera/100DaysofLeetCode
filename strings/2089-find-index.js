/**
 * You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100
 */

//My solution:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const sortedNums = nums.sort((a,b) => a-b);
    const arr = [];
    let index = sortedNums.indexOf(target);
    if (index < 0) {
        return [];
    }
    for(let i=index;i === sortedNums[index];i++) {
        arr.push(i);
    }
    return arr;
};

//Best Time: 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
    nums.sort((a, b) => a - b);
    const indexes = [];
    let index = nums.indexOf(target);
    if (index === -1) {
      return indexes;
    }
  
    for (index; nums[index] === target; index++) {
      if (nums[index] === target) {
        indexes.push(index);
      }
    }
    return indexes;
  };

//Best Memory
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let lownums=repeat=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]<target){
            lownums++;
            }
        if(nums[i]==target){
            repeat++}
    }
    let arr=[];
	
     if(repeat<1){
         return arr;
     }
   else{
    for(i=0;i<repeat;i++){
       arr.push(lownums+i)
    }
    return arr;
    }
   
};