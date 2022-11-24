<template>
  <v-app>
    <v-app-bar app color="white" class="app__app-bar">
      <v-img src="assets/img/logo/covidometro-logo.png" max-width="180px"></v-img>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            @click="getSummaryDataFromApi()"
            :loading="loading"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>refresh</v-icon>
          </v-btn>
        </template>
        <span>Atualizar lista de países</span>
      </v-tooltip>
    </v-app-bar>
    <v-main class="app__content">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapState('Summary', ['loading'])
  },
  methods: {
    ...mapActions('Summary', ['getSummaryDataFromApi'])
  }
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
