function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  }
  return foo(a + 1, b);
}

console.log(foo(1, 5)); // this will cause a stack overflow error because the recursive call never reaches a base case where a becomes greater than or equal to b