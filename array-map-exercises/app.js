// Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    return arr.map(function(number){
        return number * 2;
    })
    
}

  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


  // Take an array of numbers and make them strings

function stringItUp(arr2){
    return arr2.map(function(eachNum){
        return "" + eachNum + ""
    })
}

  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// Capitalize each of an array of names

function capitalizeNames(arr3){
    return arr3.map(function(capatalize){
        return capatalize[0].toUpperCase()
        
        
    })
}

  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
