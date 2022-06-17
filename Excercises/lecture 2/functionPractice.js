const maxDiceValue = 6;
let diceRoll = [1, 6, 6, 2, 3, 4, 6];

/* Write a function get6s_v1 that takes an array of numbers (dice values 1..6) as parameter, 
and prints the indexes and corresponding values of the array where elements are 6s. E.g., 1:6, 2:6, 6:6 ..." 
excluding other elements. At this stage, just write a basic version, eg. without using functions as parameters
Apply the function to the above array as argument. */

function get6s_v1(arrayOfNumbers) {
   let numberOfDice = [0, 0, 0, 0, 0, 0];
   /* 6 dices looped */
   for (const i in diceRoll) {
      switch (arrayOfNumbers[i]) {
         case 1: numberOfDice[0]++;
            break;

         case 2: numberOfDice[1]++;
            break;

         case 3: numberOfDice[2]++;
            break;

         case 4: numberOfDice[3]++;
            break;

         case 5: numberOfDice[4]++;
            break;

         case 6: numberOfDice[5]++;
            break;

         default:
            console.log("Fejl i switch-case");
            break;
      }
   }
   console.log(`Number of dice: 1: ${numberOfDice[0]} | 2: ${numberOfDice[1]} | 3: ${numberOfDice[2]} | 4: ${numberOfDice[3]} | 5: ${numberOfDice[4]} | 6: ${numberOfDice[5]}`);
   return numberOfDice;
}

console.log(get6s_v1(diceRoll));