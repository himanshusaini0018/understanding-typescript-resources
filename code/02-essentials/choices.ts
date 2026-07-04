//Enum type in JS
// enum Role {
//   Admin, can be overriden default valye of 0 by Admin = "ABC"
//   Editor,
//   Guest,
// }

// Enums and Union type serve same purpose, union type is more commonly used in typescript
// 
// type MyNumber = number;
// Assigning type definition to Role or User variable
//Type is used to define definition
type Role = 'admin' | 'editor' | 'guest' | 'reader'; // This is called as Literal Types
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = 'admin';

// ...

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

function access(role: Role) {
  // ...
}