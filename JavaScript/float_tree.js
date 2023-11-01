const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

function tree() {
  const map = new Map(list.map((i) => [i.id, i.pid]));
  const result = [];

  list.forEach((i) => {
    const pid = map.get(i.pid);

    if (pid) {
      if (i?.children) {
        i.children.push(i);
      } else {
        i.children = [];
      }
    } else {
      result.push([i]);
    }
  });

  return result;
}

function float_tree() {
  const map = new Map(list.map((i) => [i.id, i]));
  const result = {};

  list.forEach((i) => {
    const parent = map.get(i.pid);

    if (parent) {
      if (parent.children) {
        parent.children = [...parent.children, i];
        // result.set(i.pid, [...result.get(i.pid), i]);
      } else {
        parent.children = [i];
        // result.set(i.pid, [i]);
      }
    } else {
      result[i.id] = i;
    }
  });

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

console.log(float_tree());

const work = new Worker("work.js");
