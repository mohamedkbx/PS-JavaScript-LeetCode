/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newArr = nums.map((number)=>{
        return number ** 2
    }
    ).sort((a,b)=>a-b)
    return newArr
};