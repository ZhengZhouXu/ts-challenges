type capitalized = MyCapitalize<'hello world'>; // expected to be 'Hello world'

type MyCapitalize<T extends string> = T extends `${infer U}${infer R}`
  ? `${Uppercase<U>}${R}`
  : '';
