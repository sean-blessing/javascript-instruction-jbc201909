let letters = ["a", "b", "c", "d", "e"];

console.log(letters);

for (let l of letters) {
    console.log(l);
}

// slice and concatenate - first 2 letters, + last 2
let l1 = letters.slice(0, 2);
console.log("li = " + l1);
let l2 = letters.slice(3);
console.log("l2 = " + l2);
// concatenate l1 and l2 into a new array
let l3 = l1.concat(l2);
console.log("l3 = " + l3);
console.log("l1 = " + l1);

let nbrs = [1, 5, 3, 7, 9, 13];
let sum = 0;
for (let i = 0; i < nbrs.length; i++) {
    sum += nbrs[i];
}
console.log("sum = " + sum);


