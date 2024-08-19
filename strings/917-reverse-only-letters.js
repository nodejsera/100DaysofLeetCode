/**
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let i=0;
    let j= s.length-1;
    const val = s.split("");
    console.log(s.charCodeAt(j));
    if(s.charCodeAt(j) >= 90 && s.charCodeAt(j) <= 96){
        console.log("coming here");
    }
    while(i<j) {
        if(s.charCodeAt(i) <= 64 || (s.charCodeAt(i) > 89 && s.charCodeAt(i) < 97) || s.charCodeAt(i) >= 123 ) {
            i++;
            continue;
        }
        if(s.charCodeAt(j) <= 64 || (s.charCodeAt(j) >= 90 && s.charCodeAt(j) <= 96) && s.charCodeAt(j) >= 123) {
            j--;
            continue;
        }
        let temp = val[i];
        val[i]= val[j];
        val[j] = temp;
        i++;
        j--;
    }
    return val.join("");
};
reverseOnlyLetters("Czyr^");