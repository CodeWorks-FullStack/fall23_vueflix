<template>
  <div class="rounded bg-light shadow">
    <img :src="movieProp.posterUrl" :alt="movieProp.title" class="img-fluid rounded-top">
    <div class="p-3">
      <h2>{{ movieProp.title }}</h2>
      <h3 v-if="movieProp.voteAverage >= 7" class="text-success">{{ movieProp.voteAverage }}</h3>
      <h3 v-else-if="movieProp.voteAverage >= 5" class="text-warning">{{ movieProp.voteAverage }}</h3>
      <h3 v-else class="text-danger">{{ movieProp.voteAverage }}</h3>
    </div>
  </div>
</template>


<script>

import { Movie } from '../models/Movie.js';

export default {
  props: {
    movieProp: { type: Movie, required: true }
  },
  setup() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped></style>