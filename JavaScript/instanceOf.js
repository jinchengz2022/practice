function _instanceOf(obj, Constructor) {
  // 获取构造函数的 prototype 属性
  const prototype = Constructor.prototype;
  // 获取对象的原型对象
  let proto = obj.__proto__;

  while (proto!== null) {
      if (proto === prototype) {
          // 如果对象的原型链上存在构造函数的 prototype 属性，则返回 true
          return true;
      }
      // 继续向上查找原型链
      proto = proto.__proto__;
  }

  // 遍历完原型链都没有找到，则返回 false
  return false;
}

console.log(_instanceOf(1, Object));