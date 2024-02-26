/**
 * 
 */
//My Slolution:

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let str = "";
    for (let i=0;i<s.length;i++) {
        if (s[i].charCodeAt() > 58) {
            str += s[i];
        } else {
            const elem = s[i-1].charCodeAt();
            const val = elem+(+(s[i]));
            str += String.fromCharCode(val);
        }
    }
    return str;
};
replaceDigits("a1c1e1");

//Best Time Solution:
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let arr = s.split('');
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = String.fromCharCode(arr[i - 1].charCodeAt(0) + Number(arr[i]));
    }
    return arr.join('');
};

//Best memory Solution:
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    if (s.length === 1) {
    return s
}
character = s.split('')
// grab ascii value of the letters
// loop through the string

for (i = 1; i < s.length; i += 2) {
    let char = s[i - 1].charCodeAt();
    char += Number(s[i])
    // console.log(String.fromCharCode(char.toString()))
    character[i] = String.fromCharCode(char.toString())
}

return character.join('')
};