// ? -----> makes msg optional to be passed.
// Called as Optional Chaining

function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'
};

let input = '';
const didProvideInput = input ?? false;

// Null colasce operator ??

// When input is null or undefined then false will be assigned
