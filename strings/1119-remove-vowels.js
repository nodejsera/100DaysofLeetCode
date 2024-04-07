/**
 * 	remove vowels from a string
 */

const removeVowels = function(s) {
    let str = "";
    for(const char of s) {
        if(char === "a" || char ===  "e" || char ===  "i" || char === "o" || char === "u") {
            console.log("Vowel", char);
        } else {
            str += char
        }
    }
    return str;
};

const removeVowels1 = function(s) {
    let resultString = '';
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        if (!vowels.has(s[i])) {
            resultString += s[i];
        }
    }
    return resultString;
}


console.log(removeVowels("leetcodeisacommunityforcoders"));