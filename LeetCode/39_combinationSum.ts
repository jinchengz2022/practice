function helper(result, singleRes, visited, target, candidates, pos) {
  if (target === 0) {
    const r = [...singleRes];
    result.push(r);

    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = pos; i < candidates.length; i++) {
    if (
      visited[i] ||
      (i > 0 && !visited[i - 1] && candidates[i] === candidates[i - 1])
    ) {
      continue;
    }

    visited[i] = true;
    singleRes.push(candidates[i]);

    helper(result, singleRes, visited, target - candidates[i], candidates, i);

    visited[i] = false;
    singleRes.pop();
  }
}

function combinationSum(candidates: number[], target: number): number[][] {
  if (!candidates || !candidates.length) {
    return [];
  }

  candidates.sort((a, b) => a - b);

  const result = [];
  const singleRes = [];
  const visited = new Array(candidates.length).fill(false);

  helper(result, singleRes, visited, target, candidates, 0);

  return result;
}
