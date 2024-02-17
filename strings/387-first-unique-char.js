/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    // Using Map for better performance and key ordering
    const charCountMap = new Map();

    // Populate the Map with character counts
    for (const char of s) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    // Iterate through the string to find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCountMap.get(s[i]) === 1) {
            return i;
        }
    }

    // No unique character found
    return -1;
};