type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer A}${infer B}`
  ? LengthOfString<B, [...T, A]>
  : T['length'];

type A = LengthOfString<''>;
