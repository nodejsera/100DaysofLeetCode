/**
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
Example 2:

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
 

Constraints:

3 <= salary.length <= 100
1000 <= salary[i] <= 106
All the integers of salary are unique.
 */

//My Solution: 
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sal = 0;
    let min = salary[0];
    let max = salary[0];
    salary.map((s) => {
        sal += s;
        if (s > max) {
            max = s;
        }
        if(s < min) {
            min = s;
        }
    })
    sal = sal - min - max;
    return sal/(salary.length -2)
};


//Best Time Solution:
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const max = Math.max(...salary);
    const min = Math.min(...salary);

    const filtered = salary.filter(item => item !== max && item !== min);

    const sumOfFiltered = filtered.reduce((a, b) => a + b, 0);
    return sumOfFiltered / filtered.length;
};

//Best memory solution:

