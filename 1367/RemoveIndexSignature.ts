type Foo = {
  [key: string]: any;
  foo(): void;
  bar: string;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

// 字面量类型
type IsLiteral<T> = string extends T
  ? true
  : number extends T
  ? true
  : symbol extends T
  ? true
  : false;

type RemoveIndexSignature<T> = {
  [K in keyof T as IsLiteral<K> extends true ? never : K]: T[K];
};
