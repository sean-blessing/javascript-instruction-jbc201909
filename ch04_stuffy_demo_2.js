let s1 = {
    id: 1,
    type: "Squirrel",
    color: "Brown"
}
let s2 = {
    id: 2,
    type: "Dog",
    color: "Red"
}

let stuffies = [s1,s2];

for (let s of stuffies) {
    console.log("id = "+s.id);
    console.log("type = "+s.type);
    console.log("color = "+s.color);
}
