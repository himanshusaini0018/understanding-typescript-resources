let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

//Tuple
let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5
  }
};
//Can be used to restrict to non null or undefined values
let val: {} = 'is a value';

//An flexible object which cannnot be string or number, can be populated dynamically, 

// String is type of keys while number | string is type of values it can have. 
// What properties will be added to it can be added later
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string'
};
