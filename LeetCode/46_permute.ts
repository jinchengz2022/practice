// 全排列
function helper(result, singleRes, visited, nums) {
  if (singleRes.length === nums.length) {
    const ary = [...singleRes];
    result.push(ary);

    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    // 不重复的全排列
    // if(visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
    //     continue;
    // }

    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    singleRes.push(visited[i]);

    helper(result, singleRes, visited, nums);
    
    visited[i] = false;
    singleRes.pop();
  }
}

function permute(nums: number[]): number[][] {
  if (!nums || !nums.length) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const visited = new Array(nums.length).fill(false);
  const singleRes = [];
  const result = [];

  helper(result, singleRes, visited, nums);

  return result;
}
