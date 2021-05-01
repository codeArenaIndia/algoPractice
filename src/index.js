import "./styles.css";

//2nd smallest element of an unsorted array.

function secondSmallest(arr) {
  console.log(arr.sort((a, b) => a - b));
  return arr.sort((a, b) => a - b)[1];
}

console.log(secondSmallest([1, 2, 3, 4, 9, 8, 45, 3453, 5656]));
