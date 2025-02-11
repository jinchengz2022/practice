// 两数之和：
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
function twoSum(nums: number[], target: number): number[] {
  const map = new Map(nums.map((i, index) => [i, index]));

  for (let i = 0; i < nums.length; i++) {
    const logNum = target - nums[i];
    const mapNum = map.get(logNum);

    // 两个值可能相同
    if (mapNum && mapNum !== i) {
      return [i, mapNum];
    }
  }

  return [];
}

console.log(twoSum([2,7,11,15], 9));

