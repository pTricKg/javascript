// Example switch statement. typeof returns the type
// of the value as a string. For example, the type of
// a string is 'string', the type of a number is
// 'number', and the type of an object is 'object'.
switch (typeof 'foo') {
  case 'string':
    // some code
    
    // If you don't return in the block, you should
    // always have a break afterwards.
    break;
  default:
    //block
}

// Write a function that uses switch statements on the
// type of value. If it is a string, return 'str'. If it
// is a number, return 'num'. If it is an object, return
// 'obj'. If it is anything else, return 'other'.
function detectType(value) {
  switch (typeof value) {
    case 'string':
        return 'str';
    case 'number':
        return 'num';
    case 'object':
        return 'obj';
    default:
        return 'other'
        }
}
