// 寻找数组中最大元素的索引
// [1,2,6,10,7,6,0]
// -> 3
function peakIndexInMountainArray(arr: number[]): number {
    if(!arr || arr.length === 1) {
        return arr[0];
    }

    let left = 0, right = arr.length - 1;

    while(left + 1 < right) {
        const mid = Math.floor((left + right) / 2);

        // left -> mid 段是递增的反之递减
        // 右边往左边靠
        if(arr[mid] > arr[mid + 1]) {
            right--;
        } else {
            left++;
        }
    }

    if(arr[left] > arr[right]) {
        return left
    } else {
        return right;
    }
}

console.log(peakIndexInMountainArray([1,2,10,8,7,6,0]));
