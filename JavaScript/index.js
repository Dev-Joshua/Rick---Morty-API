//Obtengo losa personajes de la API por medio de una url
async function obtenerPersonajes (url) {
  //Realizar peticion de tipo GET.(Esto es un proceso async)
  const response = await fetch(url, {
    method : 'GET'                    //Indico metodo de la peticion
  })
  // console.log(response)
  const data = await response.json()  //Obtener datos de la peticion(archivo JSON)
  // console.log(data)
  return data.results                 //En results estan los personajes
}

//Mostrar Personajes
function mostrarPersonajes(personajes){
  let cards = ''
  //Itero los personajes
  for (let i = 0; i < personajes.length; i++) {
    cards += `
      <article id="card">
        <div class="image-container">
          <img src="${personajes[i].image}" alt="Personaje">          
        </div>
        <div class="info-personaje">
          <h2>${personajes[i].name}</h2>
          <li><span>${personajes[i].status}</span></li>
          <span>${personajes[i].species}</span>
          <span>${personajes[i].origin.name}</span>
        </div>
      </article>
    `//${personaje[i].image} => personajes en la posicion i(actual) traer imagen
  }
  //Adicionar tarjetas al section
  document.getElementById('section-cards').innerHTML = cards
}

//Funcion que va a contener la url de la API
async function main(){
  const url = 'https://rickandmortyapi.com/api/character'
  const personajes = await obtenerPersonajes(url)
  //Llamo esta funcion y le paso la url
  obtenerPersonajes(url)
  mostrarPersonajes(personajes)
}
main()




// ------------APUNTES-----------
//fetch() permite hacer peticiones y recibe como parametro la url de la API.
//Por defecto fetch hace peticiones de tipo GET

//Capturo la respuesta de la peticion en mi variable response
//con awayt le digo que espero a que me dela respuesta.(necesito usar async en el padre)
//con await decimos hasta que el servidor no de la respuesta no avanzamos

//en la variable data obtenemos de la respuesta el JSON{} data = todo el JSON