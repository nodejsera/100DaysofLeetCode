/**
 * Given an array of integers called nums, you can perform the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let operation = 0
    let sum = 0;
    if (nums.length >= 2) {
        const num1 = nums.shift();
        const num2 = nums.shift();
        sum = num1 + num2;
        operation++
    }
    while(nums.length >= 2) {
        const num1 = nums.shift();
        const num2 = nums.shift();
        const s = num1 + num2;
        if (s=== sum) {
            operation++
        } else {
            break;
        }
    }
    return operation;
};

maxOperations([1,1,1,1,1,1]);