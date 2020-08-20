// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
try{
    function sum(x, y){
        //check data types first and throw error
        if (typeof(x) !== "number" || typeof(y) !== "number"){
            throw new Error("must use a number")
        } else {
            return x + y
            }
    }
    console.log(sum(1, 10))
    //console something wrong?
    console.log(sum("1", "2"))
}
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
catch(err){
    console.log("ERROR")
}
finally{
    console.log("I'm running no matter what")
}


// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"


let user = {username: "sam", password: "123abc"};
try{
function login(username, password){
        //check credentials
        if(username !== user.username || password !== user.password){
            throw new Error("login not successful")
        } else {
            return "login successful"
        }
    }
    console.log(login("sam", "123abc"))
    console.log(login("james", "876lkj"))
}
catch(err){
    console.log("access denied")
}
finally{
    console.log("why am I here??")
}