type a = TupleToNestedObject<['a'], string>; // {a: string}
type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends string[], U> = T extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? Record<First, TupleToNestedObject<Rest, U>>
  : U;
