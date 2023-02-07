type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type Test = Diff<Foo, Bar>;

// 1. K在两个都存在时，不返回
// type Diff<T, U> = {
//   [K in keyof T | keyof U as K extends keyof T
//     ? K extends keyof U
//       ? never
//       : K
//     : K]: K extends keyof T
//     ? K extends keyof U
//       ? never
//       : T[K]
//     : K extends keyof U
//     ? U[K]
//     : never;
// };

// 1. 通过exclude + & 取出非交集
// 2. 已经限定取出的是非交集，直接判断是来自T，还是U就行
type Diff<T, U> = {
  [K in keyof T | keyof U as Exclude<K, keyof T & keyof U>]: K extends keyof T
    ? T[K]
    : K extends keyof U
    ? U[K]
    : never;
};

// 联合类型 & 运算，只取交集
type TT = ('1' | '2') & ('2' | '3' | '1');
