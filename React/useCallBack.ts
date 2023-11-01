let workInProgressHook = {
  memorizeState: null
};

export function useCallBack(nextCreate: () => void, deps: unknown[]) {
  const hook = workInProgressHook.memorizeState;
  const nextDeps = deps === undefined ? null : deps;

  if(nextDeps) {
    if(hook) {
      if(hook[1] === nextDeps) {
        return hook[0];
      }
    }
  }

  workInProgressHook.memorizeState = [nextCreate, nextDeps];

  return nextCreate;
}