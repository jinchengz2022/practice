"use strict";
exports.__esModule = true;
exports.bubble_II = void 0;
function bubble_II(ary) {
    var start = performance.now();
    // 记录最后一次交换位置
    var lastExchangeIds = 0;
    // 无序数列边界，每次只需要比较到边界即可
    var sortBorder = ary.length - 1;
    for (var k = 0; k < ary.length; k++) {
        // 记录数组是否已经有序
        var isSorted = true;
        for (var j = 0; j < ary.length - k - 1; j++) {
            var temp = 0;
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
    var end = performance.now();
    console.log(end - start);
    return ary;
}
exports.bubble_II = bubble_II;
console.log(bubble_II([24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3,
    24, 1, 54, -3, 10, 8, 45, 100, 219, -32, -31, 39, 66, 322, 3, 5, 434, 3]));
