let workInProgressHook = {
  memorizeState: null,
};

export function useMemo(nextCreate, deps) {
  const hook = workInProgressHook.memorizeState;
  const nextDeps = typeof deps === "undefined" ? null : deps;
  const nextVal = nextCreate();

  if (nextDeps) {
    if (hook) {
      if (hook[1] === nextDeps) return hook[0];
    }
  }

  workInProgressHook.memorizeState = [nextVal, nextDeps];

  return nextVal;
}
