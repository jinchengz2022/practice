function merge(intervals: number[][]): number[][] {
  if (!intervals || !intervals.length) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];

  for (let k = 0; k < intervals.length; k++) {
    // 添加第一个数组
    // result的最后一个元素的最大边界值还小于当前循环值的最小边界值那就不用替换result的最大边界值
    if (
      !result ||
      (result.length && result[result.length - 1][1] < intervals[k][0])
    ) {
      result.push(intervals[k]);
    } else {
      result[result.length - 1][1] = Math.max(
        intervals[k][1],
        result[result.length - 1][1]
      );
    }
  }

  return result;
}
