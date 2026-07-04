const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
// const inputEl = document.getElementById('user-name') , here iputEl can be null so to convince typescript that it will not be null
// we can use ! after getElementById. This can be dangerous to use, use carefully


// as HTMLInputElement | null; this is type casting, can be very useful in some case but to be used cautiously

// if (!inputEl) {
//   throw new Error('Element not found!');
// }
// Most important feature ( Optional Chaining)
// ? ---> Called optional chaining, this will allow value to accesed only when inputEl is non null
console.log(inputEl?.value);