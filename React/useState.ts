let isMount = true;
let workInProgressHook = null;

let fiber = {
  memorizeState: null,
  stateNode: () => {},
};

// render
function run() {
  isMount = false;
  workInProgressHook = fiber.memorizeState;

  return fiber.stateNode();
}

function dispatchAction(queue: Record<string, any>, action: unknown) {
  const update = {
    action,
    next: null
  };

  if(queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }

  queue.pending = update;

  run();
}

export function useState(initialState: unknown) {
  let hook: Record<string, any>;

  if (isMount) {
    hook = {
      next: null,
      queue: {
        pending: null,
      },
      memorizeState: initialState,
    };

    if (fiber.memorizeState === null) {
      fiber.memorizeState = hook;
    } else {
      workInProgressHook.next = hook;
    }

    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memorizeState;

  if(hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while(firstUpdate !== hook.queue.pending.next);

    hook.queue.pending = null;
  }

  hook.memorizeState = baseState;

  return [baseState, dispatchAction.bind(null, hook.queue)]
}
