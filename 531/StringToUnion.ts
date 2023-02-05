type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type StringToUnion<T> = T extends `${infer A}${infer B}`
  ? A | StringToUnion<B>
  : never;

// never 和联合类型在一起，不会组合
// 如下 b is '1' | '2'
type B = never | '1' | '2';
