array = [1, 2, 3, 2, 4, 6, 2, 6, 6, 4, 3, 3];
array_copy = [...array];


 result = [...array.reduce((r, n) => // create a map of occurrences
    r.set(n, (r.get(n) || 0) + 1), new Map()
  )]
  .reduce((r, v) => v[1] < r[1] ? v : r)[0]; // get the the item that appear less times

array_copy.forEach((data){
If(data == result){
array.remove(data);
}
});




finalResult = [...array.reduce((r, n) => // create a map of occurrences
    r.set(n, (r.get(n) || 0) + 1), new Map()
  )]
  .reduce((r, v) => v[1] < r[1] ? v : r)[0]; // get the the item that appear less times


console.log(finalResult);//answer
