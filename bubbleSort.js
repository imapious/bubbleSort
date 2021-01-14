/*
   This is a Bubble Sort Algorithm (ASCENDING)
   1. Loop thorugh the array opf numbers (get the array length)
   2. Compared the 1st & 2nd value
   3. If the 1st value is greater than the 2nd value then SWAP
   4. Stop the Loop if the value has been swapped
*/

let numbers = [10, 5, 8, 6, 11, 1];

let bubbleSort = (numArr) => {
  let len = numArr.length;
  let swapped;

  do {
    swapped = false;
    for (i = 0; i < len; i++) {
      if (numArr[i] > numArr[i + 1]) {
        let temp = numArr[i];
        numArr[i] = numArr[i + 1];
        numArr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return numArr;
};

console.log(bubbleSort(numbers));
