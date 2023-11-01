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
  function quick_sort(ary, startIdx, endIdx) {
    // 结束递归
    if (startIdx >= endIdx) {
      return;
    }

    // 基准元素位置
    const pivotIdx = partition(ary, startIdx, endIdx);

    // 分两部分进行递归
    quick_sort(ary, startIdx, pivotIdx - 1);
    quick_sort(ary, pivotIdx + 1, endIdx);

    return ary;
  }

  function partition(ary, startIdx, endIdx) {
    // 取第一个元素作为基准
    const pivot = ary[startIdx];
    let mark = startIdx;

    for(let k = startIdx + 1; k <= endIdx; k++) {
      if(ary[k] < pivot) {
        mark++;

        const temp = ary[mark];
        ary[mark] = ary[k];
        ary[k] = temp;
      }
    }

    ary[startIdx] = ary[mark];
    ary[mark] = pivot;
    
    return mark;
  }
  const end = performance.now();

  console.log(end - start);

  quick_sort(testAry, 0, testAry.length - 1);
}

console.log(test());
