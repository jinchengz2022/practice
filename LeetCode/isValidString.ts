function isValid(s: string): boolean {
  if (!s) {
    return false;
  }

  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if ([")", "]", "}"].includes(s[i])) {
      const popItem = stack.pop();
      if (popItem !== map[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return true;
}

console.log(isValid('({[]})()[]'));

