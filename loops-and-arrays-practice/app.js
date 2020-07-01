//Loop through array to count how many computers there are and log it
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (let i = 0; i < officeItems.length; i++){
    console.log(officeItems.length)
}

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]
for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].age)
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad.gender === 'male'){
            console.log('Sorry ' + peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", you are not old enough, do not let him in ")
        } else{
            console.log('Sorry ' + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you are not old enough, do not let her in")
        }
        // console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you are not old enough")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you are old enough")
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you are old enough, let him in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " you are old enough, let her in.")
        }
    }
}

/*Log to the console a personalized message like:

Mike is not old enough to see Mad Max

or

Madeline is old enough to see Mad Max.
*/

/* Check to see if the movie goer is a male or female for an even more personalized message.

Mike is not old enough to see Mad Max Fury Road, don't let HIM in.

or

Madeline is old enough. SHE'S good to see Mad Max Fury Road.
*/

// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"