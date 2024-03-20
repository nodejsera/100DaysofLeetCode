/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
 */

//My solution: 
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) {
        return false;
    }
    let alphabetSet = new Set(sentence.split(""));
    if (alphabetSet.size !== 26) {
        return false
    }
    let sum = 0;
    alphabetSet.forEach(character => {
        let asciiValue = character.charCodeAt(0);
        sum += asciiValue;
    });
    if(sum === 2847) {
        return true
    }
    return false;
};
