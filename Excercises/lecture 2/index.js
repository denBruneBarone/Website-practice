var maxDiceValue = 6, minDiceValue = 1;
var diceRoll = [1, 6, 6, 2, 3, 4, 6, 8];
function get6s_v1(arrayOfNumbers) {
    var str = "";
    for (var i in diceRoll)
        str += "".concat(i, ":").concat(arrayOfNumbers[i], " ");
    return str;
}
console.log(get6s_v1(diceRoll));
