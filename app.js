const url = "https://pokeapi.co/api/v2/pokemon"
const pokeContainer = document.querySelector("#pokeContainer")
const pokeBtn = document.querySelector("#pokeBtn")

async function getPokemon() {
    for ( let i = 0; i < 1025; i++) {    
        let randomNumber = Math.floor(Math.random() * 1025) + 1
        try {
            fetch(url + `/${randomNumber}/`)
            .then(res => res.json())
            .then(data => pokeContainer.textContent=(data.name))
            
        } catch(err)  {
            console.log(err)
        }
    }
}

pokeBtn.addEventListener("click", (e) => {
    getPokemon()
})
