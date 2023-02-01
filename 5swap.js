let x=10;
let y=20;
let temp;
console.log(x,y);

// using swaping:
temp = x;
x=y;
y=temp;
console.log(x,y);


// destructuring:
[ x , y ] = [y , x];
console.log(x,y);
