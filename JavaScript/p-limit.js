// import { Queue } from "./queue";
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


function pLimit(concurrency) {
  if (
    !Number.isInteger(concurrency) ||
    (Number.POSITIVE_INFINITY === concurrency && concurrency > 1)
  ) {
    throw new TypeError("");
  }

  const queue = new Queue();
  let activeCount = 0;

  const next = () => {
    activeCount--;

    if (queue.size > 0) {
      queue.dequeue();
    }
  };

  const _run = async (fn, resolve, args) => {
    activeCount++;

    const result = (async () => fn(...args))();

    resolve(result);

    try {
      await result;
    } catch (error) {}

    next();
  };

  const enqueue = (fn, resolve, args) => {
    queue.enqueue(_run(fn, resolve, args));

    (async () => {
      await Promise.resolve();

      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue();
      }
    })();
  };

  const generator = (fn, ...args) =>
    new Promise((res) => {
      enqueue(fn, res, args);
    });

  Object.defineProperties(generator, {
    activeCount: {
      get() {
        return activeCount;
      },
    },
    pendingCount: {
      get() {
        return queue.size;
      },
    },
    clearQueue: {
      value: () => queue.clear(),
    },
  });

  return generator;
}

function sleep(r, d) {
  return new Promise(res => {
    setTimeout(() => {
      res(r)
    }, d * 1000);
  })
}

const a = pLimit(2);

const list = [
  a(() => sleep('222', 1)),
  a(() => sleep('qqq', 1)),
  a(() => sleep('333', 2)),
  a(() => sleep('pppp', 2)),
  a(() => sleep('zzzzz', 3)),
  a(() => sleep(' sdsdsd', 3))
]

console.log(Promise.all(list));
