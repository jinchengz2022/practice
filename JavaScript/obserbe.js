class Subscript {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.splice(this.observers.indexOf(observer) >>> 0, 1);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log("notify：" + this.name);
  }
}
