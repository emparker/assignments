

const bodyClick = document.getElementById("clickBody")

let clicks = 0;

bodyClick.addEventListener("click", () =>{
    clicks += 1
    let counter = document.getElementById("counter")
    counter.textContent = clicks.length

    localStorage.setItem("numberOfClicks", clicks)
}) 

const savedClicks = localStorage.getItem("numberOfClicks")

if (savedClicks){
    clicks = savedClicks
}


