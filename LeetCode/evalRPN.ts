// 逆波兰表达式
// tokens = ["2","1","+","3","*"]
// ((2 + 1) * 3) = 9

// tokens = ["4","13","5","/","+"]
// (4 + (13 / 5)) = 6

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    if (typeof +tokens[i] === "number" && !Number.isNaN(+tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      console.log(stack);

      const num1 = stack.pop() as number;
      const num2 = stack.pop() as number;
      if (tokens[i] === "+") {
        stack.push(num2 + num1);
      } else if (tokens[i] === "-") {
        stack.push(num2 - num1);
      } else if (tokens[i] === "*") {
        stack.push(num2 * num1);
      } else {
        stack.push(
          num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1)
        );
      }
    }
  }

  return stack[0];
}

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
