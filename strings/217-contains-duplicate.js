/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

//My solution: 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const len = nums.length;
    const a = new Set(nums);
    if(len === a.size) {
        return false
    } else {
        return true
    }
};

//Solution 2: 
//Best solution with respect to time
//Same as above. My solution was one of the best with respect to time

/**
 * Solution 3: Best Memory solution
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] == nums[i]) {
                    return true;
                }
            }
        }
        // In case there is no match, we'll just return false
    return false;
};

