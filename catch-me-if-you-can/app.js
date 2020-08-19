// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
try{
    function sum(x, y){
    return x + y;
    }
    throw new Error("this is an error message")
}
catch(err){
    if(1 || 2 !== number)
    console.log(err)
}
finally{
    console.log("im running no matter what")
}
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.