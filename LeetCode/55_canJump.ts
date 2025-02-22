function canJump(nums: number[]): boolean { 
    let flagNum = 0;

    for(let k = 0; k < nums.length; k++) {
        if(k > flagNum) {
            return false;
        }

        flagNum = Math.max(flagNum, nums[k] + k)
    }

    return true;
}