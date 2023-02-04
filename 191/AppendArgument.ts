type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
// type AppendArgument<T extends Function, U> = T extends (
//   ...args: infer A
// ) => infer R
//   ? (...args: [...A, U]) => R
//   : T;

type AppendArgument<T extends (...args: any) => any, U> = (
  ...args: [...Parameters<T>, U]
) => ReturnType<T>;
