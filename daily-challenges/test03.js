function lastStringBeforeOperation(s) {
    const charMap = new Map();
    
    // Construct a map of characters and their first occurrences
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!charMap.has(char)) {
            charMap.set(char, i);
        }
    }
    
    // Find the minimum index in the map
    let minIndex = Infinity;
    for (const index of charMap.values()) {
        minIndex = Math.min(minIndex, index);
    }
    
    // Construct the string up to the minimum index
    let result = '';
    for (let i = 0; i < minIndex; i++) {
        result += s[i];
    }
    
    return result;
}

// Example usage:
const s = "abcd";
console.log(lastStringBeforeOperation(s));