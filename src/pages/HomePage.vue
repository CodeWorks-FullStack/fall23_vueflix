<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>Movies</h1>
      </div>
    </section>
    <section class="row align-items-center">
      <div class="col-5">
        <button :disabled="currentPage == 1" @click="changePageOfMovies(currentPage - 1)"
          class="btn btn-outline-dark fs-2">Previous Page <i class="mdi mdi-page-previous-outline"></i></button>
      </div>
      <div class="col-2 text-center fs-3">
        <p>
          {{ currentPage }} of {{ totalPages }}
        </p>
      </div>
      <div class="col-5 text-end">
        <button :disabled="currentPage == totalPages" @click="changePageOfMovies(currentPage + 1)"
          class="btn btn-outline-dark fs-2">Next Page <i class="mdi mdi-page-next-outline"></i></button>
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-3 p-3">
        <MovieCard :movieProp="movie" />
        <!-- <div class="rounded bg-light shadow">
          <img :src="movie.posterUrl" :alt="movie.title" class="img-fluid rounded-top">
          <div class="p-3">
            <h2>{{ movie.title }}</h2>
            <h3 v-if="movie.voteAverage >= 7" class="text-success">{{ movie.voteAverage }}</h3>
            <h3 v-else-if="movie.voteAverage >= 5" class="text-warning">{{ movie.voteAverage }}</h3>
            <h3 v-else class="text-danger">{{ movie.voteAverage }}</h3>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js'
import { AppState } from '../AppState.js'
import MovieCard from '../components/MovieCard.vue';

export default {
  setup() {
    async function getMovies() {
      try {
        await moviesService.getMovies();
      }
      catch (error) {
        Pop.error(error);
        // logger.error(error)
      }
    }
    onMounted(() => {
      getMovies();
    });
    return {
      movies: computed(() => AppState.movies),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      async changePageOfMovies(pageNumber) {
        try {
          await moviesService.changePageOfMovies(pageNumber);
        }
        catch (error) {
          Pop.error(error);
        }
      }
    };
  },
  components: { MovieCard }
}
</script>

<style scoped lang="scss"></style>
