// declare an array of numbers - array1
let array1 = [1,2,3,4,5];
console.log('array1 = '+array1);

// create a new array w/ those numbers reversed - arrayReversed
let arrayReversed = [];
// loop through array1, from end to beginning
for (let i=(array1.length - 1); i >= 0; i--) {
    // take value from array1[i] and push to arrayReversed
    arrayReversed.push(array1[i]);
}
// print arrayReversed
console.log('arrayReversed = '+arrayReversed);

// reverse array1 within itself (in place) - array1
// floorMid will be our loop increment max, because
// we want to take the 'first half' of the array and
// swap with the 'last half'.
let floorMid = Math.floor(array1.length / 2);
for (let i = 0; i < floorMid; i++) {
    // hold on to the value at idx i
    let hold = array1[i];
    // declare the idx for the position to swap with
    let swapIdx = array1.length - 1 - i;
    // swap the 2 indexes
    array1[i] = array1[swapIdx];
    array1[swapIdx] = hold;
}

// print array1 again
console.log("array1 reversed in place: "+array1);