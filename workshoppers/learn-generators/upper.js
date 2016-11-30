function *upper (items) {
  // your code goes here
  for (item of items) {
    try {
      yield item.toUpperCase();
    } catch (e) {
      yield null;
    }

  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
