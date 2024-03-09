/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
 */
//My solution: 
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = 0;
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = Math.abs(x);
    }
    while(x>0) {
        y = y * 10 + x % 10; 
        x = Math.floor(x / 10); 
    }
    if (y > 2147483647 ) return 0;
    return (isNegative)? -Math.abs(y): y;
};