type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'

// 递归
type DropChar<T, U> = T extends `${infer P}${infer R}`
  ? P extends U
    ? DropChar<R, U>
    : `${P}${DropChar<R, U>}`
  : '';
