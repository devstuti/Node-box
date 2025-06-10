 const var1 = 10;
console.log("multiply executed:", var1);

 const calMultiply = (a, b) => {
    return console.log(a * b);
}

module.exports = { calMultiply, var1 }; // Exporting the function and variable
