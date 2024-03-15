function sumExceptSelf(nums) {
    
    var totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    var result = [];
    for (var i = 0; i < nums.length; i++) {

        result.push(totalSum - nums[i]);
    }
  return result;
}
var nums = [4, 3, 2, 10];
var output = sumExceptSelf(nums);
console.log(output);
