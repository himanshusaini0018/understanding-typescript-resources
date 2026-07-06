type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};
// Used to comply other object/ map new object as per already defined obj
// Making Result type to be as keys of T

// Results type definition is based on T type
type Results<T> = {
  [Key in keyof T]?: number;  //. ? makes key optionall to make then non optional if they are optional use -?

  // readonly [Key in keyof T]?: number; 
  // can be used to make as read only
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

// Storing keys from Operations object
let mathResults: Results<Operations> = {
  add: mathOperations.add(5, 1),
  subtract: mathOperations.subtract(5, 2),
};

console.log(mathResults.add)