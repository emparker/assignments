const goombaForm = document.getElementById("goombaForm")

goombaForm.addEventListener("submit", ()=> {
    event.preventDefault()
    const goombaValue = goombaForm.goombasCaught.value
    // const bobOmbsValue = form.bobOmbsCaught.value
    // const cheepCheepsValue = form.cheepCheepsCaught.value

    const goombaPrice = 5
    // const bobOmbsPrice = 7
    // const cheepCheepsPrice = 11

    //let goombaTot = 0
    // let bobOmbsTotal = 0
    // let cheepCheepsTotal = 0

// const goombasValue = form.goombas.value
    let goombaTot = (Number(goombaValue) * parseInt(goombaPrice))

//let bobOmbsValue = form.bobOmbs.value
//     let bobOmbsTotal = (Number(bobOmbsValue) * parseInt(bobOmbsPrice))

// //let cheepCheepsValue = form.cheepCheeps.value
//     let cheepCheepsTotal = (Number(cheepCheepsValue) * parseInt(cheepCheepsPrice))


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
