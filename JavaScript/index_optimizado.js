function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character")
  
  results
        .then(response => response.json())
        .then(data => {
          done(data)
        })
}

getCharacters(data => {
  data.results.forEach(personaje => {
    const article = document.createRange().createContextualFragment(
      `
      <article id="card">
        <div class="image-container">
          <img src="${personaje.image}" alt="Personaje">
        </div>
        <div class="info-personaje">
          <h2>${personaje.name}</h2>
          <span>${personaje.status}</span>
          <span>${personaje.species}</span>
          <span>${personaje.origin.name}</span>
        </div>
      </article>
    `)
    //Mostramos en HTML el contenido, selecciono donde quiero insertar y lo añado
    const section = document.querySelector("section")
    section.append(article)
  })
})