<template>
  <v-card class="summary-loading elevation-0 mt-15" color="transparent">
    <v-progress-circular
      color="primary"
      indeterminate
      size="100"
    ></v-progress-circular>
    <h1 class="secondary--text mt-10 d-flex justify-center">
      Buscando lista de países, por favor aguarde...
    </h1>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SummaryLoading'
})
</script>

<style scoped>
  .summary-loading {
    text-align: center;
  }
</style>
