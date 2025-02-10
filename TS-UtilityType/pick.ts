type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Pi<T, K extends keyof T> = {
  [P in K]: T[P];
};
