export class Movie {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.originalTitle = data.original_title
    this.overview = data.overview
    this.releaseDate = new Date(data.release_date)
    this.voteAverage = data.vote_average
    this.voteCount = data.vote_count

    // NOTE string concatenation
    this.backdropUrl = 'https://image.tmdb.org/t/p/original' + data.backdrop_path
    this.posterUrl = 'https://image.tmdb.org/t/p/original' + data.poster_path
  }
}

// 'https://image.tmdb.org/t/p/original'

const movieData = {
  "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
  "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  "id": 575264,
  "original_title": "Mission: Impossible - Dead Reckoning Part One",
  "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
  "popularity": 1219.756,
  "release_date": "2023-07-08",
  "title": "Mission: Impossible - Dead Reckoning Part One",
  "video": false,
  "vote_average": 7.7,
  "vote_count": 1834
}