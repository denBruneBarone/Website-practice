let strings = ["Hejsa", "med", "dig!", "!"];


function averageLength(arr) {
    let sum = 0;
    for (let i of arr)
        sum += i.length;
    sum /= arr.length;

    return sum;
}

console.log(averageLength(strings));