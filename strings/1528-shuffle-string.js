/**
 * You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

 

Example 1:


Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
Example 2:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
 

Constraints:

s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters.
0 <= indices[i] < n
 */

//My solution
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const arr = [];
    for(let i=0; i< s.length;i++) {
        arr[indices[i]] = s[i];
    }
    return arr.join("").toString();
};

//Best in time
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffledString = ""

    for (let i = 0; i < indices.length; i++){
        shuffledString += s[indices.indexOf(i)]
    }

    return shuffledString
};
//Best in memory
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str = s.split("")
   for (let i=0; i<s.length; i++) 
   {
      let temp = indices.findIndex(el => el==i)
       str[i] = s[temp]
   }
   return str.join("")
};