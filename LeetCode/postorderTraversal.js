// left root right
var postorderTraversal = function (root) {
  const result = [];
    const stack1 = [];
    const stack2 = [];
    stack1.push(root);

    while(stack1.length !== 0) {
        const node = stack1.pop();
        stack2.push(node);

        if(node.left) {
            stack1.push(node.left);
        }

        if(node.right) {
            stack1.push(node.right);
        }
    }

    while(stack2.length !== 0) {
        result.push(stack2.pop().val);
    }

    return result;
};
