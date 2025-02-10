const mitt = (all: Map<string | symbol, Array<Function>>) => {
  const map = all || new Map();

  return {
    map,
    clear: () => {
      map.clear();
    },
    on: (type: string | symbol, func: any) => {
      const evts = map.get(type);

      if (evts) {
        evts.push(func);
      } else {
        map.set(type, [func]);
      }
    },
    off: (type: string | symbol, func: any) => {
      const evts = map.get(type);

      if (evts) {
        evts.splice(evts.indexOf(func) >>> 0, 1);
      } else {
        map.set(type, []);
      }
    },
    emit: (type: string | symbol, params: any) => {
      const evts = map.get(type);

      if (evts) {
        evts.slice().forEach((func) => {
          func(params);
        });
      }

      const all = map.get("*");
      if (all) {
        all.slice().forEach((func) => {
          func(params);
        });
      }
    },
  };
};

const m = (map) => {
  const all = map || new Map();

  return {
    all,
    on: (type, fn) => {
      const event = all.get(type);

      if (event) {
        all.set(type, [...event, fn]);
      } else {
        all.set(type, [fn]);
      }
    },
    off: (type, fn) => {
      const event = all.get(type);

      if (event) {
       event.splice(event.indexOf(fn) >>> 0, 1)
      } else {
        all.set(type, []);
      }
    },
    emit: (type, params) => {
      const event = all.get(type);

      if (event) {
        event.slice().forEach((i) => {
          i(params);
        });
      }

      const x = map.get("*");
      if (x) {
        x.slice().forEach((i) => {
          i(params);
        });
      }
    },
  };
};
