/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = new Set(); 
    for (let num of nums) {
        if (seen.has(num)) { // If the number is already in the set, return true
            return true;
        }
        seen.add(num); 
    }
    return false;
    
};