function forLoop(array) {
  var i = 0;
  for (i; i < 25; i = i+1) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loop.`);
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
  console.log(--n);
}
return "done";
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
