// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
// var result = document.querySelector("ol#favorite-things > li")
// console.log(result)

// querySelectorAll
// Select all elements from the page that match the query.

document.getElementsByClassName("things")
    console.log(things)  //or (things[0]) to get specific

//use in for loop to run through list

    for (var i = 0; i < things.length; i++){
        console.log(things[i].innertext)
    }                   //or .innerHTML

    // ex of: document.getElementsByTagName("div")
                                        //("h1")
                                        //("p")
                                        //etc

const result = document.querySelector("#favorite-thigs")
    console.log(result)       //if class and not id, do: querySelector(".favorite-things")  
    
const result2 = document.querySelectorAll("#favotie-things")
    console.log(result2)  //you'll get "node list" in console

    //when trying to get list items as an Array do like this:
cosnt result3 = document.querySelectorAll("ol#favorite-things > li")
    console.log(Array.from(result3))


document.getElementsByTagName("month")    

//all types//
/*  
.getElementById("")
.getElementBy
*/