type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
type case4 = IsUnion<never>; // false

// type IsUnion<T, Copy = T> = [T] extends [never]
//   ? false
//   : T extends never
//   ? false
//   : [Copy] extends [T]
//   ? false
//   : true;

// 无法解决never
// type IsUnion<T, Copy = T> = T extends T
//   ? [Copy] extends [T]
//     ? false
//     : true
//   : false;

// 1. 处理never的情况
type IsUnion<T, Copy = T> = [T] extends [never]
  ? false
  : T extends never // 联合类型 extends 任意类型，"因式分解"
  ? false
  : [Copy] extends [T] // 此时拿到T就是联合类型的子项
  ? false
  : true;

// 传入never extends, 返回都是never
type A = Test<never>;
type Test<T> = T extends 'a' ? true : false;
