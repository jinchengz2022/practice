export function bubble_I(ary: number[]) {
  for (let k = 0; k < ary.length; k++) {
    // 记录数组是否已经有序
    let isSorted = true;

    for (let j = 0; j < ary.length - k - 1; j++) {
      let temp = 0;
      if (ary[j] > ary[j + 1]) {
        temp = ary[j];
        ary[j] = ary[j + 1];
        ary[j + 1] = temp;
        isSorted = false;
      }
    }

    if(isSorted) {
      break;
    }
  }
}