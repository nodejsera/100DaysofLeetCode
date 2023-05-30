/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
    Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2: 

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3: 
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 */


//My Solution: 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // const arr1 = 
    let len = 0;
    const len1 = word1.length;
    const len2 = word2.length;
    if (len1 > len2) {
        len = len1;
    } else {
        len = len2;
    }
    let mergedWord = "";
    for(let i=0; i<len;i++) {
        if (i < len1) {
            mergedWord += word1[i];
        } 
        if (i < len2) {
            mergedWord += word2[i];
        }
    }
    console.log(mergedWord)
    return mergedWord;
};

//Solution 2: 
//Best solution with respect to time
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const ret = new Array(word1.length + word2.length);
    let i1 = 0;
    let i2 = 0;
    const minLen = Math.min(word1.length + word2.length);
    for (let i = 0; i < minLen; i += 2) ret[i] = word1[i1++];
    for (let i = 1; i < minLen; i += 2) ret[i] = word2[i2++];
    for (i = minLen; i1 < word1.length; ++i) ret[i] = word1[i1++];
    for (; i2 < word2.length; ++i) ret[i] = word2[i2++];
    return ret.join("");
};

//Solution 3: 
//Best Solution in terms of memory
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0;
    let j=0;
    let merge=[]
    while(i<word1.length && j<word2.length){
        merge.push(word1[i]);
        i++;
        merge.push(word2[j]);
        j++;
    }
    while(i<word1.length){
        merge.push(word1[i]);
        i++
    }
    while(j<word2.length){
        merge.push(word2[j]);
        j++
    }
    return merge.join("")
};