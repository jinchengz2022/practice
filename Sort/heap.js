const testAry = [
  24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24,
  1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1,
  54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54,
  -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3,
  10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3, 10,
  8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3, 10, 8,
  45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
];

function test() {
  const start = performance.now();
  function heap(ary) {
    // 构造最大堆
    for (let k = (ary.length - 2) / 2; k >= 0; k--) {
      helper(ary, k, ary.length);
    }

    // 循环删除对顶元素，移动到集合尾部，调整堆产生新的堆顶
    for (let k = ary.length - 1; k > 0; k--) {
      // 最后一个和第一个交换
      const temp = ary[k];
      ary[k] = ary[0];
      ary[0] = temp;

      // '下沉'调整最大堆
      helper(ary, 0, k);
    }
    console.log(ary);
  }

  function helper(ary, parentIdx, length) {
    // 保存父节点值用于最后赋值
    const temp = ary[parentIdx];
    let childIdx = 2 * parentIdx + 1;

    while (childIdx < length) {
      // 如果有右孩子并且右大于左则定位到右
      if (childIdx + 1 < length && ary[childIdx + 1] > ary[childIdx]) {
        childIdx++;
      }

      // 如果父节点大于任何子孩子则直接跳出
      if (temp >= ary[childIdx]) {
        break;
      }

      // 无需交换，赋值即可
      ary[parentIdx] = ary[childIdx];
      parentIdx = childIdx;
      childIdx = 2 * childIdx + 1;
    }

    ary[childIdx] = temp;
  }

  const end = performance.now();

  console.log(start - end);

  heap(testAry);
}
test();
