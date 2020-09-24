const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const pokemonData = JSON.parse(JSONdata)
        // console.log(data)
        const pokemon = pokemonData.objects[0].pokemon
        showOnDom(pokemon)
    }
}

function showOnDom(arr){
        //const pokemon = pokemonData.objects[0].pokemon 
        for(let i = 0; i < arr.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = arr[i].name
            document.body.appendChild(h1)
        }
    }
    
    //HOW TO GET THE DATA????!!!!
    // const p = document.createElement('p')
    // p.textContent = pokemon.resource.url 
    // document.body.appendChild(p)