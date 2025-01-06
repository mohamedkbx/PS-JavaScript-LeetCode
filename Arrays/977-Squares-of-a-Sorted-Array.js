/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let newArr = new Array(nums.length).fill(0)
    let left = 0
    let right = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        let leftSquared = Math.pow(nums[left], 2)
        let rightSquared = Math.pow(nums[right], 2)
        if (leftSquared > rightSquared) {
            newArr[i] = leftSquared;
            left++
        } else {
            newArr[i] = rightSquared;
            right--;
        }
    }
     return newArr
};