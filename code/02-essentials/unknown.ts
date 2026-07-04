// Similar to any, but forces to put values under specific checks
// Without checks it will cause compile time errors


function process(val: unknown) {
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}
