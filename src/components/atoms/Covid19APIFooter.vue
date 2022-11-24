<template>
  <v-footer class="covid-19-api-footer" color="transparent">
    Fonte: <a href="https://covid19api.com/" target="_blank">COVID 19 API</a>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Covid19APIFooter'
})
</script>

<style scoped>
  .covid-19-api-footer {
    text-align: center;
    display: block;
    font-size: 15px;
  }
</style>
