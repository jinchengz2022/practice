let isFirst = true;
function noop() {}
let proxyVoid = get(undefined);
const o = {a: 2, b: { c: 4}}

function get(obj) {
  if (obj === undefined) {
    if (!isFirst) {
      return proxyVoid;
    }
    isFirst = false;
  }
  // 注意这里拦截的是 noop 函数
  return new Proxy(obj, {
    // 这里支持返回执行的时候传入的参数
    apply(target, context, [arg]) {
      return obj === undefined ? arg : obj;
    },
    get(target, prop) {
      if (obj !== undefined && obj !== null && obj.hasOwnProperty(prop)) {
        return get(obj[prop]);
      }
      return proxyVoid;
    },
  });
};

console.log(get(o).b);

// this.get = get;
