/**
 * 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

//My Solution: 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let sr = s.split('').sort().join('');
    let tr = t.split('').sort().join('');
    if (sr === tr) {
        return true
    } else {
        return false;
    }
};


/**
 * Solution 2: Best Time solution
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;
    
    var len= s.length;
    var freq= new Array(26).fill(0);
    for(var i=0; i< len ; i++){
        freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    for(var i=0;i<26 ; i++){
        if (freq[i] !==0)
            return false;
    }
    return true;
};


/**
 * Solution 3: Best Memory solution
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    return true;
  };