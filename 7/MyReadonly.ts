type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type A = {
  name: string;
  age: number;
};

type B = Readonly<A>;
