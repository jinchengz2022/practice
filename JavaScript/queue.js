class Node {
  value;
  next;

  constructor(val) {
    this.value = val;
  }
}
class Queue {
  #head;
  #tail;
  size = 0;

  constructor() {
    this.clear();
  }

  enqueue(val) {
    const node = new Node(val);

    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }

    this.size++;
  }

  dequeue() {
    const current = this.#head;

    if (this.size === 0 || !current) {
      return;
    }

    this.#head = this.#head.next;
    this.size--;

    return current;
  }

  clear() {
    this.size = 0;
    this.#head = null;
    this.#tail = null;
  }

  *[Symbol.toPrimitive]() {
    let current = this.#head;
    
    while(current) {
      yield current.value;

      current = current.next;
    }
  }
}