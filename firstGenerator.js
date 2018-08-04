function* firstGenerator() {
  for (var i = 0; i < 5; i++) {
    yield i;
  }
}

/*
Generator functions are functions that can return multiple values using the yield keyword.
*/