// 提供默认值，使K非必传
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]; // 对K进行只读
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// 通过工具类实现
// type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
//   Omit<T, K>;
