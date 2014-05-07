function UnconventionalDefaults(params, defaultParams) {
  if (params === undefined) {
    params = defaultParams;
  }
  
  // function would do work here
  
  return params;
}

// Modify this function to set params to defaultParams if params
// is falsy
function moreConventionalDefaults(params, defaultParams) {
  // do a more conventional check here (check if params is falsy, 
  // and not just undefined
  if (params) {
    params = defaultParams; 
  }
  return params;
}


// This evaluates to 'true'. This is because the first operand
// is true, so it is immediately returned. The second operand
// is never evaluated.
true || false;

// This evaluates to 'true'. This is because the first operand
// is false, so the second operand is returned. In this case,
// the second operand must be evaluated.
false || true;

// This evaluates to false. Since the first operand is false,
// the second operand is not even evaluated.
false && true;

// This evaluates to false. Since the first operand is true,
// the second operand is evaluated. Since this is false, the
// statement evaluates to false.
true && false;

// This should be similar to the function you implemented
// earlier.
function moreConventionalDefaults(param, defaultParams) {
  if (!params) {
    params = defaultParams;
  }  
  return params;
}

function conventionalDefaults(params, defaultParams) {
  // Use || to implement a better default mechanism.
    return params || defaultParams;
    //return params;
}

// If value is falsy and not a string, return
// undefined. Otherwise, return 'good input!'
// Note that this means that the empty string ('')
// should return 'good input!'.
function detectGoodInput(value) {
  if (!value && value !== ""){
      return undefined;
  }else {
      return 'good input!'
  }
}

detectGoodInput(string);
