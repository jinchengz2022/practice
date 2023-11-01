

interface VIP {
  vipExpires: number;
}

interface CommonUser {
  promotionUsed: boolean;
}

type WithOut<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// {
//   vipExpires: never,
//   promotionUsed: boolean
// } |
// {
//   vipExpires: number,
//   promotionUsed: never
// }
type Wrapper<T, U> = (WithOut<T, U> & U) | (WithOut<U, T> & T);
type User = Wrapper<VIP, CommonUser>;

const user: User = {
  // vipExpires: 1,
  promotionUsed: true,
};

type Equal<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type Delimiter = "-" | "_";

// type CamelString<S extends String> = S extends `${}`

type CamelCase<
  K extends String,
  U extends Delimiter
> = K extends `${infer F}${U}${infer R}`
  ? `${F}${CamelCase<Capitalize<R>, U>}`
  : K;

type a = CamelCase<"a_b_c", "_">;
