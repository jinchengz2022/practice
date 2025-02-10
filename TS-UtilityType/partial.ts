type MyPartial<T> = {
  [P in keyof T]?: T[P];
}

type P<T> = {
  [P in keyof T]?: T[P]
}