/**

 Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.
 */



//Solution 1: My Solution
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    console.log("IP adress", address);
    let output = "";
    for (let i=0; i<address.length; i++) {
        if (address[i] === ".") {
            output += "[.]"
        } else {
            output += address[i];
        }
    }

    return output.toString();
};

//Solution 2: 
//Best solution with respect to time
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replaceAll('.','[.]')
};


//Solution 3: 
//Best Solution in terms of memory
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ".") {
            str += "[.]";
        } else {
            str += s[i];
        }
    }
    return str;
};


