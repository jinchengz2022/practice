function nextGreaterElements(nums: number[]): number[] {
    const result: number[] = [];
    const numsLength = nums.length;
    const extendLength = numsLength * 2;

    for(let i = 0; i < numsLength; i++) {
        result[i] = -1;

        // 从下一个元素开始查找，扩展数组长度
        for(let k = i + 1; k < extendLength; k++) {
            // 数组遍历完，已经遍历到当前元素
            if(k % numsLength === i)  {
                break;
            }
            // 找到扩展数组中比当前元素大的元素，使用 % 找到原数组中的数字，找到直接退出
            if(nums[k % numsLength] > nums[i]) {
                result[i] = nums[k % numsLength];
                break;
            }
        }
    }
    return result
};

console.log(nextGreaterElements([1,2,3,4,3])); // [ 2, 3, 4, -1, 4 ]
