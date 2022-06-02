// 如果是tuple，添加readonly
// 如果是数组，则不需要
type Length<T extends readonly any[]> = T["length"];

type A = Length<[1, 2]>;
