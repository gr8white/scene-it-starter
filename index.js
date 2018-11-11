document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('container')

  function renderMovies (movieArray) {
    var movieHTML = movieArray.map((currentMovie) => {
      return `<div class="movie-card card" id="movie" style="width: 18rem;margin-bottom: 35px">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="movie-title card-title">${currentMovie.Title}</h5>
            <h5 class="release-date card-text">${currentMovie.Year}</h5>    
        
        </div>
        <div style="padding: 0px 0px 20px 20px;">
        <a href="#" class="btn btn-primary">Add</a>
        </div>
        </div>`
    }).join('')
    return movieHTML
  }
  // container.innerHTML = renderMovies(window.SCENE_IT.movieData)
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    container.innerHTML = renderMovies(window.SCENE_IT.movieData)
  })
})
