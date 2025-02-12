// 输入：n = 19
// 输出：true
// 1 ** 2 + 9 ** 2 = 82
// 8 ** 2 + 2 ** 2 = 68
// 6 ** 2 + 8 ** 2 = 100
// 1 ** 2 + 0 ** 2 + 0 ** 2 = 1

function helper(n: number): number {
    let result = 0;

    while(n > 0) {
        const num = n % 10;
        n = Math.floor(n / 10);
        result = result + (num ** 2)
    }

    return result;
}

function isHappy(n: number): boolean {
    let slow = n, fast = helper(n)

    while(slow !== fast && slow !== 1 && fast !== 1) {
        slow = helper(slow);
        fast = helper(helper(fast));
    }

  return fast === 1;
}

console.log(isHappy(19));
