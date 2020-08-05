const goombaForm = document.getElementById("goombaForm")

goombaForm.addEventListener("submit", ()=> {
    event.preventDefault()
    const goombaValue = goombaForm.goombasCaught.value
    const goombaPrice = 5
    
    let goombaTot = (Number(goombaValue) * parseInt(goombaPrice))

    let goombaTotal = goombaTot 
    document.getElementById("totalGoombasBox").textContent = goombaTotal

})


const bobOmbForm = document.getElementById("bobOmbForm")

bobOmbForm.addEventListener("submit", ()=> {
    event.preventDefault()
    const bobOmbValue = bobOmbForm.bobOmbsCaught.value
    const bobOmbPrice = 7

    let bobOmbTot = (Number(bobOmbValue) * parseInt(bobOmbPrice))

    let bobOmbTotal = bobOmbTot
    document.getElementById("totalBobOmbsBox").textContent = bobOmbTotal
})


const cheepCheepForm = document.getElementById("cheepCheepForm")

cheepCheepForm.addEventListener("submit", ()=> {
    event.preventDefault()
    const cheepCheepValue = cheepCheepForm.cheepCheepsCaught.value
    const cheepCheepPrice = 11

    let cheepCheepTot = (Number(cheepCheepValue) * parseInt(cheepCheepPrice))

    let cheepCheepTotal = cheepCheepTot
    document.getElementById("totalCheepCheepsBox").textContent = cheepCheepTotal
})



totalButton = document.getElementById("grandTotalButton")

totalButton.addEventListener("click", ()=>{
    const actualGoombaPrice = Number(document.getElementById("totalGoombasBox").textContent) 
    console.log(actualGoombaPrice)
    
    const actualBobOmbPrice = Number(document.getElementById("totalBobOmbsBox").textContent) 
    
    const actualCheepCheepPrice = Number(document.getElementById("totalCheepCheepsBox").textContent) 

        totalP = actualGoombaPrice + actualBobOmbPrice + actualCheepCheepPrice
        
        let finalPrice = totalP
        document.getElementById("grandTotalBox").textContent = finalPrice
    })


