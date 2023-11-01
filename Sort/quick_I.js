const testAry = [1, 4, 5, 3, 2];

function test() {
  const start = performance.now();
  function quick_sort(ary, startIdx, endIdx) {
    // 结束递归
    if (startIdx >= endIdx) {
      return;
    }

    // 基准元素位置
    const pivotIdx = partition(ary, startIdx, endIdx);
console.log(pivotIdx);
    // 分两部分进行递归
    // quick_sort(ary, startIdx, pivotIdx - 1);
    // quick_sort(ary, pivotIdx + 1, endIdx);

    return ary;
  }

  function partition(ary, startIdx, endIdx) {
    // 取第一个元素作为基准
    const pivot = ary[startIdx];
    let left = startIdx;
    let right = endIdx;

    while (left !== right) {
      while (left < right && ary[right] > pivot) {
        right--;
      }

      while (left < right && ary[left] <= pivot) {
        left++;
      }

      if (left < right) {
        const temp = ary[left];
        ary[left] = ary[right];
        ary[right] = temp;
      }
    }

    // pivot和指针重合点交换
    ary[startIdx] = ary[left];
    ary[left] = pivot;

    return left;
  }
  const end = performance.now();

  console.log(end - start);

  quick_sort(testAry, 0, testAry.length - 1);
}

console.log(test());
// [1, 4, 5, 3, 2]
// function helper(ary, start, end) {
//   const pivot = ary[start]; // 1
//   let left = start;
//   let right = end;

//   // 1 3 [1, 3, 5, 4, 2]
//   while(left !== right) {
//     while(left < right && pivot < ary[right]) {
//       right--;
//     }

//     while(left < right && pivot >= ary[left]) {
//       left++;
//     }

//     if(ary[left] > ary[right]) {
//       const temp = ary[left];
//       ary[left] = ary[right];
//       ary[right] = temp;
//     }
//   }

//   ary[start] = ary[left];
//   ary[left] = pivot;

//   return left;
// }

// function quick_sort(ary, start, end) {

//   if(start >= end) {
//     return;
//   }

//   const pos = helper(ary, start, end);

//   quick_sort(ary, start, pos - 1);
//   quick_sort(ary, pos + 1, end);

//   return ary;
// }