

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length-1;i++) {
//         for(let j=i+1; j<nums.length;j++ ) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//     return;
// };

var twoSum = function(nums, target) {
    let m = new Map();
    for (let i = 0; ; i++) {
        const x = nums[i];
        const y = target - x;
        if (m.has(y)) {
            m = [m.get(y), i];
            return m;
        }
        m.set(x, i);
    }
};
twoSum([1,3,2], 5)