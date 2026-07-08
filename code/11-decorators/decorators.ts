// Decorator is object oriented programming feature so can be attached to class, method, field, getter and setter
// Cann't be attached to non-class methods

// Decorator is a function written in certain way

// In Ecma script decorator should accept 2 inputs, generally 1st is Target and 2nd in context of ClassDecoratorContext


// T extends new (...args: any[])=> any signifies here following
// new --> New class
// (...args: any[]) can accept any number of arguments
// any will return any type of argument
function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log('logger decorator');
  console.log(target);
  console.log(ctx);

  // extending target means adding more properties to class
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {

  // addInitializer is special method which get executed in constructor of target object
  ctx.addInitializer(function (this: any) {
    //binding current object to this
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log('Executing original function');
    target.apply(this);
  };
}
// for decorator in pattern : replacer('') -> accepting an value
/// This function is wrapped in another function, receiving input value from argument
function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

@logger
class Person {
  @replacer('')
  name = 'Max';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const max = new Person();
const greet = max.greet;
greet();