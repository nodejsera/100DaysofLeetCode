/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

//My Solution: 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    let i=0 
    let j=0
    let max = 0;
    let arr = [];
    while (i < s.length) {
        let c = s.charAt(i);
        while(arr.includes(c)) {
            arr.shift();
            j++
        }
        arr.push(c);
        max = Math.max(max, i-j + 1);
        i++;
    }
    return max;
};
//Best Time Solution:
