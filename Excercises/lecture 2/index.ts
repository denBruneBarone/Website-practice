const maxDiceValue = 6, minDiceValue = 1;
let diceRoll: number[] = [1, 6, 6, 2, 3, 4, 6, 8];

function get6s_v1(arrayOfNumbers) {
   let str = "";
   for (const i in diceRoll)
      str += `${i}:${arrayOfNumbers[i]} `

   return str;
}

console.log(get6s_v1(diceRoll));
