// const appUser = {
//   name: 'Max',
//   age: 35,
//   permissions: [{ id: 'p1', title: 'Admin', description: 'Admin access' }],
// };

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser['permissions'];
type Perm = Perms[number];
// indexed access types, used to determine type of Name from Names

// By giving number in Names array it return type of indexed value, which is defined while defining Names

type Names = string[];
type Name = Names[number];