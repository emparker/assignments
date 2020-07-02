const centerH1 = document.getElementsByTagName("h1")[0]
centerH1.style.textAlign = "center"

/*Preliminaries
Write a for loop that prints to the console the numbers 0 through 9.
Write a for loop that prints to the console 9 through 0.
Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]*/ 

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

for (i = array.length -1; i >= 0; i--){
    console.log(array[i])
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

/*Bronze Medal
Write a for loop that will push the numbers 0 through 9 to an array.
Write a for loop that prints to the console only even numbers 0 through 100.
Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"] */

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

for (i = 0; i <= arr.length; i++){
    function oneToNine(){
        arr.push(arr[i])
        return oneToNine
    }
const printArr = oneToNine(arr.length)  
console.log(printArr)
}
