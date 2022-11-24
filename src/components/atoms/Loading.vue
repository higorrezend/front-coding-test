<template>
  <v-card class="loading elevation-0 mt-15 mb-15" color="transparent">
    <v-progress-circular
      color="primary"
      indeterminate
      size="100"
    ></v-progress-circular>
    <h1 class="secondary--text mt-10 d-flex justify-center">
      {{ message }}
    </h1>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Loading',
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
  .loading {
    text-align: center;
    line-height: 40px;
  }
</style>
