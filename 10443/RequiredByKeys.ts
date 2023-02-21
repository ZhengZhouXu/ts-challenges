interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }

type Merge<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, U = {}> = Merge<
  {
    [K in keyof T as K extends U ? K : never]-?: T[K];
  } & {
    [K in keyof T as K extends U ? never : K]?: T[K];
  }
>;
