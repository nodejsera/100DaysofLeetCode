/**
 * You are given a 0-indexed integer array nums and an integer k.

Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.

The set bits in an integer are the 1's present when it is written in binary.

For example, the binary representation of 21 is 10101, which has 3 set bits.
 

Example 1:

Input: nums = [5,10,1,5,2], k = 1
Output: 13
Explanation: The binary representation of the indices are: 
0 = 0002
1 = 0012
2 = 0102
3 = 0112
4 = 1002 
Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
Hence, the answer is nums[1] + nums[2] + nums[4] = 13.
Example 2:

Input: nums = [4,3,2,1], k = 2
Output: 1
Explanation: The binary representation of the indices are:
0 = 002
1 = 012
2 = 102
3 = 112
Only index 3 has k = 2 set bits in its binary representation.
Hence, the answer is nums[3] = 1.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105
0 <= k <= 10
 */


// My Solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let o = 0;
    for(let i=0; i< nums.length; i++) {
        if (i.toString(2).split('1').length - 1 === k) {
            o += nums[i];
        }
    }
    return o;
    
};

//Best Time Solution:
var countSetBits = function(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;  // Check if the rightmost bit is set
        num >>>= 1;        // Right shift the integer to move to the next bit
    }
    return count;
};

var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
};

//Best memory Solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let bits = 0;
        let num = i;
        
        while (num > 0) {
            bits += num & 1;
            num >>= 1;
        }

        if(bits === k) {
            count += nums[i];
        }
    }

    return count;
};