/**
 * Given an array of integers called nums, you can perform the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.

 

Example 1:

Input: nums = [3,2,1,4,5]
Output: 2
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [1,4,5].
- Delete the first two elements, with score 1 + 4 = 5, nums = [5].
We are unable to perform any more operations as nums contain only 1 element.
Example 2:

Input: nums = [3,2,6,1,4]
Output: 1
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
We are unable to perform any more operations as the score of the next operation isn't the same as the previous one.
 

Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 1000
 */

/**
 * You are given a string s.

Consider performing the following operation until s becomes empty:

For every alphabet character from 'a' to 'z', remove the first occurrence of that character in s (if it exists).
Return the value of the string s right before applying the last operation.

 

Example 1:

Input: s = "aabcbbca"
Output: "ba"
Explanation: We do the following operations:
- Remove the underlined characters s = "aabcbbca". The resulting string is s = "abbca".
- Remove the underlined characters s = "abbca". The resulting string is s = "ba".
- Remove the underlined characters s = "ba". The resulting string is s = "".
The string just before the last operation is "ba".
Example 2:

Input: s = "abcd"
Output: "abcd"
Explanation: We do the following operation:
- Remove the underlined characters s = "abcd". The resulting string is s = "".
The string just before the last operation is "abcd".
 

Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters.
 */

/**
 * Given an array of integers called nums, you can perform any of the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
Choose the last two elements of nums and delete them.
Choose the first and the last elements of nums and delete them.
The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.

 

Example 1:

Input: nums = [3,2,1,2,3,4]
Output: 3
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [1,2,3,4].
- Delete the first and the last elements, with score 1 + 4 = 5, nums = [2,3].
- Delete the first and the last elements, with score 2 + 3 = 5, nums = [].
We are unable to perform any more operations as nums is empty.
Example 2:

Input: nums = [3,2,6,1,4]
Output: 2
Explanation: We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
- Delete the last two elements, with score 1 + 4 = 5, nums = [6].
It can be proven that we can perform at most 2 operations.
 

Constraints:

2 <= nums.length <= 2000
1 <= nums[i] <= 1000
 */

/**
 * You are given a 0-indexed array nums consisting of positive integers.

Initially, you can increase the value of any element in the array by at most 1.

After that, you need to select one or more elements from the final array such that those elements are consecutive when sorted in increasing order. For example, the elements [3, 4, 5] are consecutive while [3, 4, 6] and [1, 1, 2, 3] are not.
Return the maximum number of elements that you can select.

 

Example 1:

Input: nums = [2,1,5,1,1]
Output: 3
Explanation: We can increase the elements at indices 0 and 3. The resulting array is nums = [3,1,5,2,1].
We select the elements [3,1,5,2,1] and we sort them to obtain [1,2,3], which are consecutive.
It can be shown that we cannot select more than 3 consecutive elements.
Example 2:

Input: nums = [1,4,7,10]
Output: 1
Explanation: The maximum consecutive elements that we can select is 1.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
 */