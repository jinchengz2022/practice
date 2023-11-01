function _new(fn) {
  const obj = {};

  obj.__proto__ = fn.__proto__;

  const r = fn.call(obj);

  return r;
}