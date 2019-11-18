let str = "How U doin?";

let str1 = str.split(" ");

console.log(str1);

let str2 = str.split("");
console.log(str2);

console.log("sum some numbers...");
console.log(sumIt(2,4,6,8));
console.log(sumIt(1,3));
console.log(sumIt(1,3,6,8,100,233,567,43322));
console.log(sumIt("a","b"));

function sumIt(...n) {
    let sum = 0;
    for (let nbr of n) {
        sum += nbr;
    }
    return sum;
}