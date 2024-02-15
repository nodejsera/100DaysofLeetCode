/**
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
 

Constraints:

3 <= nums.length <= 104
1 <= nums[i] <= 106
 */

//My Solutin:

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b);
    let maxSum = 0;
    for(let i=1; i< nums.length-1;i++) {
        if (nums[i-1] + nums[i] > nums[i+1]) {
            maxSum = nums[i-1] + nums[i] + nums[i+1]
        }
    }
    return maxSum;
};

//Best Time solution: 
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let sortedNums = nums.sort((a, b) => b - a)
    let perimetr = 0;
    for (let i = 2; i < sortedNums.length; i++) {
      if (sortedNums[i - 2] < sortedNums[i - 1] + sortedNums[i]) {
          return perimetr = sortedNums[i - 2] + sortedNums[i - 1] + sortedNums[i];
      }
    }
    return perimetr;
  };

//Best Memory Solution: 
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a)

    for (let i = 0; i < nums.length; i++) {
        let z = nums[i],
            x = nums[i + 1],
            y = nums[i + 2]

        if (z < x + y) {
            return z + x + y
        }
    }

    return 0
};