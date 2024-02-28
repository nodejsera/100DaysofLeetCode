/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

 */

//My Solution 1: 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const x2 = x.toString().split("").reverse().join("");
    return (x==x2)? true: false;
};

//My Solution 2
/**
 * @param {number} x
 * @return {boolean}
 */
function reverseDigits(num) { 
    let rev_num = 0; 
    while(num > 0) 
    { 
        rev_num = rev_num * 10 + num % 10; 
        num = Math.floor(num / 10); 
    } 
    return rev_num; 
} 
var isPalindrome = function(x) {
const x2 = reverseDigits(x);
return (x===x2)? true: false;
};

//Best Time solution:
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let result = true
    let mid = x.length / 2 + 1
    for (let index = 0; index < mid; index++) {
        left = x[index]
        right = x[x.length - index - 1]
        if (left != right) {
            result = false
            return result
        }
    }

    return result
};

//Best memory Solution:
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n=x;
    let rev=0
    while(n>0){
     let temp=n%10
     rev=rev*10+temp
     n=Math.floor(n/10);
    }
    return rev==x
 };
 