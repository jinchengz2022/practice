export function bubble_II(ary: number[]) {
  const start = performance.now();
  // 记录最后一次交换位置
  let lastExchangeIds = 0;
  // 无序数列边界，每次只需要比较到边界即可
  let sortBorder = ary.length - 1;
  for (let k = 0; k < ary.length; k++) {
    // 记录数组是否已经有序
    let isSorted = true;

    for (let j = 0; j < sortBorder; j++) {
      let temp = 0;
      if (ary[j] > ary[j + 1]) {
        temp = ary[j];
        ary[j] = ary[j + 1];
        ary[j + 1] = temp;

        isSorted = false;
        // 更新为最后一次交换元素的位置
        lastExchangeIds = j;
      }
    }

    sortBorder = lastExchangeIds;
    if (isSorted) {
      break;
    }
  }
  const end = performance.now();

  console.log(end - start);

  return ary;
}

console.log(
  bubble_II([
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24,
    1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1,
    54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54,
    -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3,
    10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3, 10,
    8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3, 24, 1, 54, -3, 10, 8,
    45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
  ])
);

