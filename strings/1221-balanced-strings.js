/**
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 

Constraints:

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.
*/

//My solution: 
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let a=0;
    for (let i =0; i<s.length;i++) {
        if (s[i] === "L") {
            a++
        }
        if (s[i] === "R") {
            a--
        }
        if (a === 0) {
            count++;
        }
    }
    return count;
};

//Best in Time:
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const arr = s.split('');
    let result = 0;
    let counter = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'R'){
            counter++;
        }
        if(arr[i] === 'L'){
            counter--;
        }
        if(counter === 0){
            result++;
        }
    }

    return result;
};

//Best in memory: 
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   let balanced = 0
   let count = 0

   for(let i=0;i<s.length;i++){
       if(s[i]==="L"){
           balanced++
       }else if (s[i]==="R"){
           balanced--
       }
       if(balanced===0){
      count++
       }
   }
   return count
};
