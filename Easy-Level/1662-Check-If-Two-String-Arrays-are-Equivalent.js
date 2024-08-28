/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let left = right = "";
    
    for (let i = 0; i < word1.length; i++) {
        left += word1[i];
    }
    for (let i = 0; i < word2.length; i++) {
        right += word2[i];
    }
    return left === right;
};