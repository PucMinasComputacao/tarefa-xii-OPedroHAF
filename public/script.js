const chaveAPI = '6c756c95bb6bcb24f3deb7dd3673155d'

window.addEventListener("load", () =>{
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveAPI}`)
  .then(res => res.json())
  .then(data => {
    renderizarFilmes(data.results)
  })
})

const btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click", () =>{
  const dataEscolhida = document.getElementById("dataFiltro").value
  if (!dataEscolhida) {
    alert("Por favor, selecione uma data!")
    return
  }
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveAPI}`)
  .then(res => res.json())
  .then(data => {
    let filmesFiltrados = data.results.filter(filme => {
      return filme.release_date >= dataEscolhida
    })
    console.log(filmesFiltrados)
    if(filmesFiltrados.length >= 1){
      renderizarFilmes(filmesFiltrados)
    }
    else{
      document.getElementById("divFilmes").innerHTML = `<p class="text-center fs-1 p-5">Nenhum filme encontrado</>`
    }
  })
})

function createMovieCard(filme){
  let str = `
    <div class="col-md-4">
      <div class="card h-100">
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" 
             class="card-img-top" alt="${filme.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${filme.title}</h5>
          <p class="card-text">${filme.overview}</p>
          <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary mt-auto">Detalhes</a>
        </div>
      </div>
    </div>`
  return str
}

function renderizarFilmes(listaFilmes) {
  let str = ``
  for (let i = 0; i < listaFilmes.length; i++) {
    if (i % 3 === 0) {
      str += `<div class="row mb-4">`
    }
    let filme = listaFilmes[i]
    str += createMovieCard(filme)
    if ((i + 1) % 3 === 0) {
      str += `</div>`
    }
  }
  if (listaFilmes.length % 3 !== 0) {
    str += `</div>`
  }
  document.getElementById("divFilmes").innerHTML = str
}


  