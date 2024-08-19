/**100221
 * Given an array of integers called nums, you can perform the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.
 */
/**
 * @param {number[]} nums
 * @return {number}
 *
 */

var calRest = function(nums, sum) {
    const operation = 1;
    while(nums.length >= 2) {
        if (nums[0] + nums[nums.length-1] === sum) {
            nums.shift();
            nums.pop();
            operation++;
        } else if (nums[0] + nums[1] === sum) {
            nums.shift();
            nums.shift();
            operation++;
        } else if(nums[nums.length-1] + nums[nums.length-2] === sum ) {
            nums.pop();
            nums.pop();
            operation++;
        } else {
            break;
        }
    }
    return operation
}
var maxOperations = function(nums) {
    let operation = 0
    let operation1 = 0
    let operation2 =0;
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    const nums1 = nums;
    const nums2 = nums;
    if (nums.length >= 2) {
        const num1 = nums.shift();
        const num2 = nums.shift();
        sum = num1 + num2;
        operation++
    }
    if (nums1.length >= 2) {
        const num1 = nums1.pop();
        const num2 = nums1.pop();
        sum1 = num1 + num2;
        operation1++
    }
    if (nums2.length >= 2) {
        const num1 = nums2.shift();
        const num2 = nums2.pop();
        sum2 = num1 + num2;
        operation2++
    }


    if (operation>operation1) {
        if(operation>operation2) {
            return operation;
        } else {
            return operation2;
        }
    } else {
        if (operation2 > operation1) {
            return operation2;
        } else {
            return operation1;
        }
    }
};

console.log(maxOperations([1,1,2,3,2,2,1,3,3]));