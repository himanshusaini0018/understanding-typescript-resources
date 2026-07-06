function add(a: number, b: number) {
  return a + b;
}
// Can be used to build utility types

// Used to extract nested types
// Here add return number type so infer is used to extract nested type of numbers

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;
