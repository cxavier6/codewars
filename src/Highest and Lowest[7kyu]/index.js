/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples

Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
*/ 


function highAndLow(numbers){
  let arrNumbers = numbers.split(" ");
  return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`;
}