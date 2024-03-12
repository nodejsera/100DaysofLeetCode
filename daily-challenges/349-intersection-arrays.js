/**
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */

//My Solution: 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    for(let i=0;i<nums1.length;i++) {
        if(nums2.includes(nums1[i])) {
            arr.push(nums1[i]);
        }
    }
    const setFromArr = new Set(arr);
    return Array.from(setFromArr);;
};

//Best Time solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let intersectionSet = new Set()
    
    for(let i=0;i<nums2.length;i++){
        if(set1.has(nums2[i])){
            intersectionSet.add(nums2[i])
        }
    }
    
    return Array.from(intersectionSet)
};

//Best Memory Solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];

    let smallArray = nums1.length >= nums2.length ? nums2:nums1
    let bigArray = nums1.length >= nums2.length ? nums1:nums2
    for(let i =0;i<smallArray.length;i++){
        if(bigArray.includes(smallArray[i]) && !res.includes(smallArray[i])) res.push(smallArray[i])
    }
    return res
};