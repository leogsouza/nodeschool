function *range(from, to) {
  for (let step = from; step <= to; step++) {
    yield step;
  }
}

for (var r of range(5, 10)) {
    console.log( r );
}
