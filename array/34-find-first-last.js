/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

//My solution:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return[nums.indexOf(target), nums.lastIndexOf(target)]
};

//Best Time Solution: 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const firstOccurence = (nums, low, high, target) => {
    let first = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        first = mid;
        high = mid - 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return first;
  };
  
  const lastOccurence = (nums, low, high, target) => {
    let last = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        last = mid;
        low = mid + 1;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return last;
  };
  var searchRange = function(nums, target) {
      let low = 0;
      let high = nums.length-1;
      let firstOcc = firstOccurence(nums, low, high, target);
      let lastOcc = lastOccurence(nums, low, high, target);
      return [firstOcc,lastOcc];
  };

  //Best Memory solution:
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n = nums.length;
    let first = -1;
    let sec = -1;
    for(let i = 0; i<n;i++){
        if(nums[i] == target){
            first = i;
            break;
        }
    }

    for(let i = 0; i<n;i++){
        if(nums[n-1-i] == target){
            sec = n-1-i;
            break;
        }
    }

    return [first, sec];
};