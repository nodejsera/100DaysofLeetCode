/**
 * Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
Example 2:

Input: nums = [-1,0]
Output: [-1,0]
Example 3:

Input: nums = [0,1]
Output: [1,0]
 

Constraints:

2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each integer in nums will appear twice, only two integers will appear once.
 */

//My Solution:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let num = [];

    for(let i=0; i<nums.length;i++) {
        const val = nums.indexOf(nums[i]);
        const val2 = nums.lastIndexOf(nums[i]);
        if(val === val2) {
            num.push(nums[i]);
        }
    }
    return num;
};

//Best Time solution:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const set = new Set();
    for (const num of nums) {
        set.has(num) ? set.delete(num) : set.add(num);
    }
    return [...set];
};