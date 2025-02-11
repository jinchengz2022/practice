// 搜索插入位置
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
//输入: nums = [1,3,5,6], target = 2
// 输出: 1
function searchInsert(nums: number[], target: number): number {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[left] > target) {
      return left;
    }
    if (nums[right] < target) {
      return right + 1;
    }
    if (nums[left] < target) {
      left++;
      continue;
    }
    if (nums[right] > target) {
      right--;
      continue;
    }
  }

  return 0;
}

console.log(searchInsert([1, 3, 5, 6], 6));
