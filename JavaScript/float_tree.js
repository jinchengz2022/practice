const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 7 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 2 },
  { id: 7, name: "部门7", pid: 2 },
  { id: 8, name: "部门8", pid: 5 },
];

function arrToTree(arr) {
  const map = new Map(arr.map((i) => [i.id, i]));

  let result;

  arr.forEach((k) => {
    const ele = map.get(k.pid);
    if (!ele) {
      result = k;
    } else {
      if (!ele.children) {
        ele.children = [k];
      } else {
        ele.children.push(k);
      }
    }
  });

  return result;
}

function addDeep(value, deep = 1) {
  if (Array.isArray(value) && value.length === 0) {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((i) => {
      i.deep = deep;

      if (i.children) {
        addDeep(i.children, deep + 1);
      }
    });
  } else {
    value.deep = deep;
    if (value.children) {
      addDeep(value.children, deep + 1);
    }
  }

  return value;
}

const result = addDeep(arrToTree(list));

function findItemOfTree(tree, id) {
  console.log(Object.prototype.toString.call(tree));
  if (!tree || Object.prototype.toString.call(tree) !== "[object Object]") {
    return "struct error";
  }

  function search(item) {
    if (item.id === id) {
      return item;
    }
    if (item.children && item.children.length) {
      for (let i = 0; i < item.children.length; i++) {
        if (item.children[i].id === id) {
          return item.children[i];
        }
        if (item.children[i].children && item.children[i].children.length) {
          return search(item.children[i]);
        }
      }
    }
  }

  const result = search(tree);

  return result;
}

function tree_list() {
  const result = [];

  function _run(ary) {
    ary.forEach((item) => {
      if (item.children) {
        _run(item.children);
      }

      delete item.children;
      result.push(item);
    });
  }

  _run([float_tree()]);

  console.log(result);
}

console.log(findItemOfTree(result, 5));