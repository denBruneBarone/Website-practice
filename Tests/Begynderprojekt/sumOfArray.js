let arr = [1,2,3,4,5,6];

function sum(array) {
    let sum = 0;
    for(let x of array)
        sum += x;

    return sum;
}

console.log("array: " + arr + "\n\tsum: " + sum(arr));

/* tilfældig procent */
console.log("Tilfældig procent: " + Math.round(Math.random() * 100));

