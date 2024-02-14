/**
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
*/

//My Solution: 

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let output = null;
    let i = 0;
    while (output === null && i < words.length) {
        const temp = words[i];
        const temp2 = words[i].split("").reverse().join("");
        if (temp === temp2) { 
            output = temp;
        }
        i++;  
    }
};

//My solution 2: 
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0; i< words.length; i++) {
        if (words[i] === words[i].split("").reverse().join("")) {
            return words[i];
        }
    }
    return "";
};

//Best Time solution: 
/**
 * @param {string[]} words
 * @return {string}
 */
function firstPalindrome (words) {
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        let isPalindromic = true;
        for (let j = 0; j < word.length/2; j++) {
            if (word[j] !== word[word.length - j - 1]) {
                isPalindromic = false;
                break;
            }
        }
        if(isPalindromic){
            return word;
        } 
    }
    return "";
};

//Best Memory solution: 
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let isPalindrome=true;
        const word=words[i];
        for(let j=0;j<word.length;j++){
            if(word[j]!==word[word.length-j-1]){
                isPalindrome=false;
                break
            }
        }
        if(isPalindrome) return word;
    }
    return ""
 };