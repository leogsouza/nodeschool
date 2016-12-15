function *flat (arr) {

  if(Array.isArray(arr)){
    for(let item of arr)
      yield* flat(item);
  } else {
    yield arr;
  }

}

var A = [1, [2, [3, 4], 5], 6];
var l = flat(A);
console.log(l.next());
for (var f of flat(A)) {
    console.log( f );
}
