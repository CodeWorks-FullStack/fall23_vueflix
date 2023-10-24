import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {
  async getMovies() {
    const res = await movieApi.get('/discover/movie')
    logger.log('GOT MOVIES', res.data)
    // NOTE res.data.map is not a function, because this is an object
    // const newMovies = res.data.map(pojo => new Movie(pojo))
    const newMovies = res.data.results.map(pojo => new Movie(pojo))
    AppState.movies = newMovies
    AppState.currentPage = res.data.page
    AppState.totalPages = res.data.total_pages
  }

  async changePageOfMovies(endpointUrl) {
    const res = await movieApi.get(endpointUrl)
    logger.log('GOT MOVIES', res.data)
    const newMovies = res.data.results.map(pojo => new Movie(pojo))
    AppState.movies = newMovies
    AppState.currentPage = res.data.page
    AppState.totalPages = res.data.total_pages
  }

  async getMoviesWithSearchQuery(searchQuery) {
    const res = await movieApi.get(`search/movie?query=${searchQuery}`)
    logger.log('GET MOVIES WITH SEARCH', res.data)

    AppState.searchQuery = searchQuery
    const newMovies = res.data.results.map(pojo => new Movie(pojo))
    AppState.movies = newMovies
    AppState.currentPage = res.data.page
    AppState.totalPages = res.data.total_pages
  }

  clearData() {
    AppState.movies = []
    AppState.currentPage = 0
    AppState.totalPages = 0
    AppState.searchQuery = ''
  }
}

export const moviesService = new MoviesService()