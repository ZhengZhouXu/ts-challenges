interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }

type Merge<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, U = {}> = Merge<
  {
    [K in keyof T as K extends U ? K : never]?: T[K];
  } & {
    [K in keyof T as K extends U ? never : K]: T[K];
  }
>;

// 任何值都可以继承自{}
type A = string extends {} ? true : false;
