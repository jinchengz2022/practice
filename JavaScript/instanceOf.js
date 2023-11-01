function _instanceOf(l, r) {
  const r_prototype = r.prototype;
  let l_ptoto_ = l.__proto__;

  while (true) {
    if (r_prototype === l_ptoto_) {
      return true;
    }
    if (!l_ptoto_) {
      return false;
    }
    l_ptoto_ = l_ptoto_.__proto__;
  }
}

console.log(_instanceOf({ a: 1 }, { a: 2, b: 2 }));