const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
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

function findDeep(value, deep = 1) {
  if (Array.isArray(value) && value.length === 0) {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((i) => {
      i.deep = deep;

      if (i.children) {
        findDeep(i.children, deep + 1);
      }
    });
  } else {
    value.deep = deep;
    if (value.children) {
      findDeep(value.children, deep + 1);
    }
  }

  return value;
}

const result = findDeep(arrToTree(list));

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

console.log(result);
