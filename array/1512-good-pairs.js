/**
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
 */

//My Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const count = {};
 
    for (let ele of nums) {
        if (count[ele]) {
            count[ele] += 1;
        } else {
            count[ele] = 1;
        }
    }
    console.log(count);
    console.log(Object.values(count));
    const gp = Object.values(count);
    let gpSum = 0;
    for(let i =0;i<gp.length;i++) {
        gpSum += gp[i]*(gp[i]-1)/2
    }
    return gpSum;
};

//Best Time Solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let numberOfGoodPairs = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[j] === nums[i]){
                numberOfGoodPairs++;
            }
        }
    }
    return numberOfGoodPairs
};

//Best memory Solutino:
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let numberOfPairs = 0;

    for (let i = 0; i < nums.length; i++ ) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i<j) {
                numberOfPairs += 1;
            }
        }
    }

    return numberOfPairs;
    
};