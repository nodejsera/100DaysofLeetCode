/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
 */

//My solution:
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let o=0;
    for(let i=0;i<stones.length;i++) {
        for(let j=0; j<jewels.length;j++){
            if (stones[i] === jewels[j]) {
                o++;
            }
        }
    }
    return o;
};

//Solution 2: 
//Best solution with respect to time
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for(let stone of stones) {
        if(jewels.includes(stone)) count++
    }
    return count
};


/**
 * Solution 3: Best Memory solution
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let number = 0;
    let jewelsArray = [];

    for(x = 0; x < jewels.length; x++){
        jewelsArray.push(jewels.charAt(x));
    };

    for(x = 0; x < stones.length; x++){
        if(jewelsArray.includes(stones.charAt(x))){
            number++;
        }
    }

    return number;
};