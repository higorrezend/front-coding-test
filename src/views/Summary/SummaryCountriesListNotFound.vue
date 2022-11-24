<template>
  <div>
    <v-card class="summary-countries-search-not-found elevation-1 pa-2 mb-5">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6" lg="6" xl="6">
            <h2 class="secondary--text">
              Nenhum país foi encontrado...
            </h2>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <img src="assets/img/summary/not-found.jpg"/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'SummaryCountriesListNotFound',
  computed: {
    ...mapGetters('Summary', ['countriesFormated'])
  }
})
</script>

<style scoped>
  .summary-countries-search-not-found {
    text-align: center;
  }
  .summary-countries-search-not-found h2 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 70px;
  }
  .summary-countries-search-not-found img {
    width: 100%;
    max-width: 400px;
  }
</style>
