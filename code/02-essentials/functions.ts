function add(a: number, b: number) {
  return a + b;
}
// Definiting return type of number
// function add(a: number, b: number):number {
//   return a + b;
// }


// Automatically inferred if nothing specified
// function log(message: string) : void {
//   console.log(message);
// }

function log(message: string) {
  console.log(message);
}

// never type signifies that this fn may not complete ever, so dot operator after logAndThrow will not show anything
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};
// Defining functions as type, cb is function which will accept one argument and return void
function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string; //greet will be fn of 0 arguments and return string
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

user.greet();