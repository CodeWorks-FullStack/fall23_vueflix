<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>Search Movies</h1>
      </div>
      <div class="col-12 p-4">
        <form @submit.prevent="getMoviesWithSearchQuery()">
          <div class="mb-3">
            <label for="movieTitle" class="form-label">Movie Title...</label>
            <input v-model="editable" type="text" class="form-control" id="movieTitle">
            <button class="btn btn-primary" type="submit">Submit <i class="mdi mdi-magnify"></i></button>
          </div>
        </form>
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-4 p-4">
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'
import MovieCard from '../components/MovieCard.vue';

export default {
  setup() {
    const editable = ref('');
    return {
      editable,
      movies: computed(() => AppState.movies),
      async getMoviesWithSearchQuery() {
        try {
          const searchQuery = editable.value;
          logger.log('query:', searchQuery);
          await moviesService.getMoviesWithSearchQuery(searchQuery);
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


<style lang="scss" scoped></style>