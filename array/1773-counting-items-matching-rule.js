/**
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

 

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
 

Constraints:

1 <= items.length <= 104
1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
ruleKey is equal to either "type", "color", or "name".
All strings consist only of lowercase letters.
 */
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

//My solution:
var countMatches = function(items, ruleKey, ruleValue) {
    let key = 0;
    let count=0;
    if (ruleKey === "color") {
        key = 1;
    }
    if (ruleKey === "name") {
        key = 2;
    }
    for(let i=0; i<items.length;i++) {
        if(items[i][key] === ruleValue) {
            count++;
        }
    }
    console.log("Count", count);
    return count;

};


//Best Time Solution:
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    items.forEach((e) => {
        if (ruleKey == "type" && e[0] == ruleValue) {
            count++
        }
        else if (ruleKey == "color" && e[1] == ruleValue) {
            count++
        }
        else if (ruleKey == "name" && e[2] == ruleValue) {
            count++
        };
    });
    return count;
};

//Best Memory Solution:
var countMatches = function(items, ruleKey, ruleValue) {
    let parameter  = 0
    if(ruleKey == 'color') {
        parameter = 1
    } else if (ruleKey == 'name') {
        parameter = 2
    }
    let count = 0
    for (const item of items) {
        if (item[parameter] == ruleValue) {
            count++
        }
    }
    return count
};