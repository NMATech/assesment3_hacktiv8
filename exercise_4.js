// Nadindra Maulana Aziz

function arrSum(arr) {
  let max_sum = -Infinity,
    current_sum = 0,
    start_index = 0,
    temp_start = 0,
    end_index = 0;

  for (let i = 0; i < arr.length; i++) {
    current_sum += arr[i];

    if (current_sum > max_sum) {
      max_sum = current_sum;
      start_index = temp_start;
      end_index = i;
    }

    if (current_sum < 0) {
      current_sum = 0;
      temp_start = i + 1;
    }
  }

  let subarray = arr.slice(start_index, end_index);

  console.log([subarray, max_sum]);
}

arrSum([-2, -3, 4, -1, -2, 1, 5, -3]); // Output [ [4, -1, -2, 1, 5], 7 ]
