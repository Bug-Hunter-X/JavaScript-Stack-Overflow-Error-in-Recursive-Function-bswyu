function foo(a, b) {
  if (a >= b) {
    return true;
  } else if (a > b) {
    return false; 
  }
  return foo(a + 1, b);
}

console.log(foo(1, 5)); // This will now correctly return true