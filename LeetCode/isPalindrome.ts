// 判断是否是回文数
function isPalindrome(x: number): boolean {
  const str = x.toString();

  if (str.length === 1) {
    return true;
  }

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome(122322));
