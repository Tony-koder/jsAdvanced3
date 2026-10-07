const url = "https://pokeapi.co/api/v2/pokemon"
const pokeContainer = document.querySelector("#pokeContainer")
const pokeBtn = document.querySelector("#pokeBtn")

async function getPokemon() {
    for ( let i = 0; i < 1025; i++) {    
        try {
            fetch(url + `/${i+1}/`)
            .then(res => res.json())
            .then(data => console.log(data.name))
            
        } catch(err)  {
            console.log(err)
        }
    }
}

getPokemon()