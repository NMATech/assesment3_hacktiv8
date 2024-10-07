// Nadindra Maulana Aziz

function sumArray(arr, int) {
  let hasil = [];

  if (arr.length < 2) {
    return hasil;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        hasil.push([arr[i], arr[j]]);
      }
    }
  }

  return hasil;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));
