//CHAPTER 2 CHALLENGES: PROGRAM STRUCTURE

//TRIANGLE LOOP
console.log("Create a Triangle");

let triangle = "";
let counter = 0;
while (counter < 7) {
  triangle = triangle + "#";
  console.log(triangle);
  counter = counter + 1;
}

//FIZZBUZZ
console.log("FizzBuzz");
for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  } else if (count % 3 == 0) {
    console.log("Fizz");
  } else if (count % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
}

//CHESSBOARD - USING A WHILE LOOP
console.log("Chessboard");
function Chessboard1() {
  let i = 1;
  let b = "";
  while (i <= 8) {
    let j = 1;

    while (j <= 16) {
      if ((j + i) % 2 == 0) {
        b = b + " ";
      } else {
        b = b + "#";
      }
      j++;
    }
    b = b + "\n";
    i++;
  }
  console.log(b);
}
Chessboard1();

//CHESSBOARD - USING A FOR LOOP
function Chessboard(rows, columns) {
  let b = "";
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= columns; j++) {
      if ((j + i) % 2 == 0) {
        b = b + " ";
      } else {
        b = b + "#";
      }
    }
    b = b + "\n";
  }
  console.log(b);
}
Chessboard(8, 16);
