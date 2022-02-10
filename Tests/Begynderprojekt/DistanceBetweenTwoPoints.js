points = [
    {x:1, y:1}, {x:10,y:10}
];
console.log(points);

points.dist = function() {
    let p1 = this[0],
        p2 = this[1];
    
    let a = p2.x - p1.x,
        b = p2.y - p1.y;
    
    return Math.sqrt(a * a + b * b);
}

console.log("Distance: " + points.dist());



class Point { // By convention, class names are capitalized.
    constructor(x, y) { // Constructor function to initialize new instances.
        this.x = x; // This keyword is the new object being initialized.
        this.y = y; // Store function arguments as object properties.
    } // No return is necessary in constructor functions.

    distance() { // Method to compute distance from origin to point.
        return Math.sqrt( // Return the square root of x² + y².
        this.x * this.x + // this refers to the Point object on which
        this.y * this.y // the distance method is invoked.
        );
    }
}
    // Use the Point() constructor function with "new" to create Point objects
    let p = new Point(-2, 2); // The geometric point (1,1).
    // Now use a method of the Point object p 
    console.log(p.distance() + "\u{1F600}");

