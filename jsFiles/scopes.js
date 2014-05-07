// bar is defined outside of any function, so it is
// accessible both inside functions (since functions
// inherit their outer scope) and outside.
var bar;

function regularFunction() {
  // Using bar here uses the globally defined bar.
}

function shadowingFunction() {
  // This redeclares bar, which creates a totally new
  // variable.
  var bar;
  // Any time bar is accessed, the bar declared within
  // the function is modified, and not the bar outside
  // the function. This is called shadowing.
}

// Accessing bar here would refer to the global bar
// once again.
