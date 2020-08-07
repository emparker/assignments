

const bodyClick = document.getElementById("clickBody")
let clicks = 0;
bodyClick.addEventListener("click", () =>{
    clicks += 1
    const counter = document.getElementById("counter")
    counter.innerHTML = clicks

    localStorage.setItem("amount", "clicks")
    const howManyClicks = localStorage.getItem("amount")
    console.log(howManyClicks)
}) 

// Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.


