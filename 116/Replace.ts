type replaced = Replace<'foobar', 'bar', 'foo'>; // expected to be 'types are awesome!'

type Replace<
  T extends string,
  U extends string,
  P extends string
> = T extends `${infer A}${Exclude<U, ''>}${infer B}` ? `${A}${P}${B}` : T;
