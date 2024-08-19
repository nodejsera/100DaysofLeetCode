/**
 * 169. Majority Element
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {}
        for (const element of nums) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }
        let max = 0
        let output;
    //    console.log("count", count);
    for (const property in count) {
        console.log(`${property}: ${count[property]}`);
        console.log("count[property]", count[property]);
        console.log("max",max );

        if (count[property] > max) {
            max = count[property];
            output = property;
        }
    }
    console.log(output);
    return output;

};

majorityElement([3,3,4]);