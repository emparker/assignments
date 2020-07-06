var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.
const poppedItem = vegetables.pop()
//console.log(poppedItem)
//console.log("vegetables: ", vegetables)

//Remove the first item from the fruit array.
fruit.shift()
//console.log(fruit)

//Find the index of "orange."
const orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex)

//Add that number to the end of the fruit array.
fruit.push("1")
//console.log(fruit)

//Use the length property to find the length of the vegetable array.
//console.log(vegetables.length)

//Add that number to the end of the vegetable array.
vegetables.push("3")
//console.log(vegetables)

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
const food = fruit.concat(vegetables)
//console.log (food)

//Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
//console.log(food)

//Reverse your array.
food.reverse()
//console.log(food)

//Turn the array into a string and return it.
const newArr = food.join()
console.log(newArr)