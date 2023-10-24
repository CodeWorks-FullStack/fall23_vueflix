<template>
  <section v-if="totalPages > 0" class="row align-items-center">
    <div class="col-5">
      <button v-if="searchQuery == ''" :disabled="currentPage <= 1" @click="changePageOfMovies(currentPage - 1)"
        class="btn btn-outline-dark fs-2">Previous Page <i class="mdi mdi-page-previous-outline"></i></button>
      <button v-else :disabled="currentPage <= 1" @click="changePageOfMoviesWithSearchQuery(currentPage - 1)"
        class="btn btn-outline-success fs-2">Previous Page <i class="mdi mdi-page-previous-outline"></i></button>
    </div>
    <div class="col-2 text-center fs-3">
      <p>
        {{ currentPage }} of {{ totalPages }}
      </p>
    </div>
    <div class="col-5 text-end">
      <button v-if="searchQuery == ''" :disabled="currentPage == totalPages" @click="changePageOfMovies(currentPage + 1)"
        class="btn btn-outline-dark fs-2">Next Page <i class="mdi mdi-page-next-outline"></i></button>
      <button v-else :disabled="currentPage == totalPages" @click="changePageOfMoviesWithSearchQuery(currentPage + 1)"
        class="btn btn-outline-success fs-2">Next Page <i class="mdi mdi-page-next-outline"></i></button>
    </div>
  </section>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { moviesService } from '../services/MoviesService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    return {
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      searchQuery: computed(() => AppState.searchQuery),
      async changePageOfMovies(pageNumber) {
        try {
          const endpointUrl = `discover/movie?page=${pageNumber}`
          await moviesService.changePageOfMovies(endpointUrl);
        }
        catch (error) {
          Pop.error(error);
        }
      },
      async changePageOfMoviesWithSearchQuery(pageNumber) {
        try {
          const searchQuery = AppState.searchQuery
          const endpointUrl = `search/movie?page=${pageNumber}&query=${searchQuery}`
          await moviesService.changePageOfMovies(endpointUrl)
        } catch (error) {
          Pop.error(error);
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>