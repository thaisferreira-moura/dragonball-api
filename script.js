const container = document.getElementById("personagens-container")

fetch("https://dragonball-api.com/api/characters?limit=58")
.then((res) => res.json())
.then((data) => {
    console.log(data.items)

    data.items.forEach(personagem => {
    
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <img src="${personagem.image}" alt="" />
        <h2>${personagem.name}</h2>
        <p>Raça:${personagem.race} </p>
        <p>Genero:${personagem.gender} </p>

        `
        container.appendChild(card)

    })
})