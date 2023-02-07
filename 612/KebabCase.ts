type FooBarBaz = KebabCase<'FooBarBaz'>;
const foobarbaz: FooBarBaz = 'foo-bar-baz';

type DoNothing = KebabCase<'do-nothing'>;
const doNothing: DoNothing = 'do-nothing';

// 1. 循环string -> 递归
// 2. 找出大写
// 3. 转换，使用Uncapitalize判断首字母大写
// TODO: 错误代码
// type KebabCase<T> = T extends `${infer U}${infer Rest}`
//   ? U extends Lowercase<U>
//     ? `${U}${KebabCase<Rest>}`
//     : `${Lowercase<U>}${KebabCase<Rest>}`
//   : T;

type KebabCase<T> = T extends `${infer U}${infer R}`
  ? `${U extends Lowercase<U> ? U : Lowercase<U>}${R extends Uncapitalize<R>
      ? KebabCase<R>
      : `-${KebabCase<R>}`}`
  : T;

// type TT = 'a' extends 'abc' ? true : false;
