/* Write a helper function eg "is6(v)" that can test if the supplied parameter value v is a 6 
Rewrite get6s_v1 to get6_v2 such that it uses the helper function to test if the index/value should be printed. 
Apply the function to the above array.   */

const maxDiceValue = 6, minDiceValue = 1;
let diceRoll: number[] = [1, 6, 6, 2, 3, 4, 6];

function get6s_v1(arrayOfNumbers): string {
   let str = "";
   for (const i in diceRoll)
      str += `${i}:${arrayOfNumbers[i]} `

   return str;
}

function is6(v) {
   
}

console.log(get6s_v1(diceRoll));
