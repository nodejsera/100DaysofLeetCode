/**
 * Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

There is one laser beam between any two security devices if both conditions are met:

The two devices are located on two different rows: r1 and r2, where r1 < r2.
For each row i where r1 < i < r2, there are no security devices in the ith row.
Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.

 

Example 1:


Input: bank = ["011001","000000","010100","001000"]
Output: 8
Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
 * bank[0][1] -- bank[2][1]
 * bank[0][1] -- bank[2][3]
 * bank[0][2] -- bank[2][1]
 * bank[0][2] -- bank[2][3]
 * bank[0][5] -- bank[2][1]
 * bank[0][5] -- bank[2][3]
 * bank[2][1] -- bank[3][2]
 * bank[2][3] -- bank[3][2]
Note that there is no beam between any device on the 0th row with any on the 3rd row.
This is because the 2nd row contains security devices, which breaks the second condition.
Example 2:


Input: bank = ["000","111","000"]
Output: 0
Explanation: There does not exist two devices located on two different rows.
 

Constraints:

m == bank.length
n == bank[i].length
1 <= m, n <= 500
bank[i][j] is either '0' or '1'.
 */


//My Solution:
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const elemCount = [];
    let res = 0;
    bank.forEach((elem) => {
        const elem1 = elem.split("");
        console.log("Elem 1", elem1);
        const sum = elem1.reduce((a,b) => (+a) + (+b));
        console.log("sum", sum);
        if(sum > 0) {
            elemCount.push(sum);
        }
    })
    console.log("elemCount", elemCount);
    if(elemCount.length < 2) {
        return res;
    }
    
    for(let i=0; i<elemCount.length - 1;i++) {
        console.log("elemcount   ", elemCount[i]);
        const a = elemCount[i] * elemCount[i+1];
        res += a;
    }
    console.log(res);
    return res;
};
numberOfBeams(["011001","000000","010100","001000"]);

//Best Time Solution:
var numberOfBeams = function(bank) {
    let total = 0,
        pOnes = 0,
        ones = 0;

    for(let i=0;i<bank.length;i++){
        
        for(let j=0;j<bank[i].length;j++){
            ones+= bank[i][j] === "1" ?  1 : 0;  
        }

        if(!ones) continue;    
        
        total+= pOnes * ones;
        pOnes = ones;
        ones = 0;
        
    }

    return total;
};

//Best Memory Solutino:
var numberOfBeams = function(bank) {
    let result=0;
     let m=0
    for(let i=0;i<bank.length;i++){
         let count=0;
        let temp=bank[i];
       
        for(let j=0;j<temp.length;j++){
            if( temp[j]==1){
                count++;
            } 
        }
            if(count ==0){
            continue;
        }
         result +=m*count;
         m=count;
    }
    return result;
};