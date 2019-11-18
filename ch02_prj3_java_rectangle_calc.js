console.log("Welcome to the rectangle calulator!");

for (let i = 0; i <= 5; i++) {
   let n1 = ((Math.random()*100)+1).toFixed(2); 
   let n2 = ((Math.random()*100)+1).toFixed(2); 
   let area = n1 * n2;
   let perimeter = n1*2 + n2*2;
   console.log("i = "+i);
   console.log("n1 = "+n1);
   console.log("n2 = "+n2);
   console.log("area = "+area);
   console.log("perimeter = "+perimeter);
   console.log("======================");
}