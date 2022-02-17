const maxDiceValue = 6, minDiceValue = 1;
let diceRoll = [1, 6, 6, 2, 3, 4, 6];

/* Write a function get6s_v1 that takes an array of numbers (dice values 1..6) as parameter, 
and prints the indexes and corresponding values of the array where elements are 6s. E.g., 1:6, 2:6, 6:6 ..." 
excluding other elements. At this stage, just write a basic version, eg. without using functions as parameters
Apply the function to the above array as argument. */

function get6s_v1(arrayOfNumbers) {
   str = "";
   for (const i in diceRoll)
      str += `${i}:${arrayOfNumbers[i]} `

   return str;
}

console.log(get6s_v1(diceRoll));