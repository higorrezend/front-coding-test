<template>
  <v-container class="countries">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <h1 class="countries__title secondary--text">Conheça o Covidômetro</h1>
        <h5 class="countries__sub-title secondary--text">
          Fique atualizado com velocidade e transparência.
          O Covidômetro é uma ferramenta que mostra para você
          em tempo real o número de casos e óbitos relacionados
          a pandemia da COVID-19 ao redor do mundo.
        </h5>
      </v-col>
      </v-row>
      <v-row no-gutters class="mb-15">
      <v-col cols="12" sm="12" md="8" lg="8" xl="8" offset-md="2" offset-lg="2" offset-xl="2" class="pt-10 mt-10">
        <CountriesSearch></CountriesSearch>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8" offset-md="2" offset-lg="2" offset-xl="2" class="pt-10">
        <CountriesList></CountriesList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import CountriesList from './CountriesList.vue'
import CountriesSearch from './CountriesSearch.vue'

export default Vue.extend({
  name: 'Countries',
  components: {
    CountriesList,
    CountriesSearch
  }
})
</script>

<style scoped>
  .countries {
    background-image: url('/assets/img/countries/doctors.svg');
    background-position: 100% 0%;
    background-repeat: no-repeat;
    padding-top: 80px;
  }

  .countries__title {
    font-size: 50px;
  }
  .countries__sub-title {
    font-size: 16px;
  }
</style>
