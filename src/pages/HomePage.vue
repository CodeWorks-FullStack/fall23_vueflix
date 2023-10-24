<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>Movies</h1>
      </div>
    </section>
    <PaginationComponent />
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-3 p-3">
        <MovieCard :movieProp="movie" />
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
import PaginationComponent from '../components/PaginationComponent.vue';

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
      moviesService.clearData()
      getMovies();
    });
    return {
      movies: computed(() => AppState.movies)
    };
  },
  components: { MovieCard, PaginationComponent }
}
</script>

<style scoped lang="scss"></style>
