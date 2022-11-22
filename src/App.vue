<template>
  <v-app>
    <v-app-bar app color="white" class="app__app-bar">
      <v-img src="assets/img/logo/covidometro-logo.png" max-width="180px"></v-img>
    </v-app-bar>
    <v-main class="app__content">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style scoped>
  .app__app-bar >>> .v-toolbar__content {
    margin: 0 auto;
    max-width: 1200px;
  }
  .app__content >>> .v-main__wrap {
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 40px;
  }
</style>
