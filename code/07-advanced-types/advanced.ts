// This syntax is used to provide freedom in typescript for adding any key to the object having datastore type
// Morally typescript will not allow this to used so below type syntax needs to be provided

type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max');
const firstRole = roles[0];

let dataEntries = {
  entry1: 0.51,
  entry2: -1.23
} satisfies Record<string, number>;
