/**
 * Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

 

Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
 

Constraints:

1 <= arr.length <= 10^5
1 <= arr[i] <= 10^9
0 <= k <= arr.length
 *
 */

//My solution 1: 

var findLeastNumOfUniqueInts = function (arr, k) {
    const count = {};
    for (let ele of arr) {
        if (count[ele]) {
            count[ele] += 1;
        } else {
            count[ele] = 1;
        }
    }
    const values = Object.values(count);
    values.sort((a,b) => a-b);
    while(k>0) {
        if (k >= values[0]) {
            k = k - values[0];
            values.shift()
        } else {
            break;
        }
    }
    return values.length;
};

//My solution 2: 
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const count = {};
    for (let ele of arr) {
        if (count[ele]) {
            count[ele] += 1;
        } else {
            count[ele] = 1;
        }
    }
    const values = Object.values(count);
    const sortedValues = values.sort((a,b) => a-b);
    const uniqueCount = sortedValues.length;
    for (const num of sortedValues) {
        if (k >= num ) {
            console.log("values.length", values.length);
            k -= num;
            uniqueCount--
            console.log("values.length", values.length);
        } else {
            break;
        }
    }
    return uniqueCount;
};

//Best Time: 
var findLeastNumOfUniqueInts = function (arr, k) {
    let counts = new Map();
    for (const num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    let ordered = Array.from(counts.values()).sort((a, b) => b - a);
    while (k > 0) {
        let val = ordered[ordered.length - 1];
        if (val <= k) {
            k -= val;
            ordered.pop();
        } else {
            break;
        }
    }
    return ordered.length;
};



//Best memory:

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    arr.sort((a,b)=>a-b);
    const g = [];
    let cnt = 1;
    for(let i = 1; i < arr.length; ++i)
        if (arr[i]==arr[i-1]) cnt++; 
            else {
                g.push(cnt);
                cnt = 1;
            }
    g.push(cnt);
    g.sort((a,b)=>a-b);
    for(let i = 0; i < g.length; ++i)
        if (k >= g[i]) {
            k -= g[i];
        } else {
            return g.length - i;
        }
    return 0;
};