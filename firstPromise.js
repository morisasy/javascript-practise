function firstPromise() {
  return new Promise(function(resolve, reject) {
    var x = Math.random();
    if (x > 0.5) {
      resolve(`Hooray! Your promise was resolved with value ${x}.`);
    } else {
      reject(`Oh no, your promise was rejected with value ${x}`);
    }
  });
}