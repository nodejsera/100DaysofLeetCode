/**
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
*/

//My solution: 
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counter = {};
    nums.forEach(num => {
        if (counter[num]) {
            counter[num] += 1
        } else {
            counter[num] = 1
        }
    })
    let val = 0;
    for (let elem in counter) {
                if (counter.hasOwnProperty(elem)) {
                    if (counter[elem] === 1) {
                        val = elem;
                    }  
                }
    }
    return val;
};

//Best in time solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0,
    twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones;
};
//Best in Memory
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length;
    let ans = 0;
    for(let j=0; j<32; j++){
        let sum = 0;
        for(let i=0; i < n; i++){
            if(((nums[i]>>j)&1) == 1){
                sum++;
                sum = sum%3;
            }
        }

        if(sum != 0)
            ans += (1<<j)
    }
    return ans;
};
