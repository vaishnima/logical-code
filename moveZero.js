function moveZeroes(nums) {
    let lastNonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[lastNonZero];
            nums[lastNonZero] = nums[i];
            nums[i] = temp;
            lastNonZero++;
        }
    }
}


let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);  
