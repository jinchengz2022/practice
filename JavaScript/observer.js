class Observer {
  cache = {};

  on(eventName, fn) {
    if (this.cache[eventName]) {
      this.cache[eventName] = this.cache[eventName].push(fn);
    } else {
      this.cache[eventName] = [];
    }
  };

  emit(eventName) {
    if (this.cache[eventName]) {
      this.cache[eventName].forEach(fn => fn());
    } else {
      console.error('暂无该事件');
    }
  };

  off(eventName, fn) {
    if(this.cache[eventName]) {
      const newCache = fn ? this.cache[eventName].filter((f => f !== fn)) : [];
      this.cache[eventName] = newCache;
    }
  }
}
