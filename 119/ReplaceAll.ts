type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'

type ReplaceAll<
  T extends string,
  U extends string,
  P extends string
> = T extends `${infer A}${Exclude<U, ''>}${infer B}`
  ? `${A}${P}${ReplaceAll<B, U, P>}`
  : T;
