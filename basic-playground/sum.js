// console.log("without export it will execute simple logs and all, to call fun and var in diff file we need to do import and export");
export const var1 = 10;
console.log("sum executed:", var1);

export const calSum = (a, b) => {
    return a + b;
}