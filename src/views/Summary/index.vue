<template>
  <v-container class="summary">
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <h1 class="summary__title secondary--text">
          Conheça o Covidômetro
        </h1>
        <h5 class="summary__sub-title secondary--text">
          Fique atualizado com velocidade e transparência.
          O Covidômetro é uma ferramenta que mostra para você
          em tempo real o número de casos e óbitos relacionados
          a pandemia da COVID-19 ao redor do mundo.
        </h5>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col cols="12">
        <SummaryLoading/>
      </v-col>
    </v-row>
    <v-row v-else-if="error.status">
      <v-col cols="12">
        <SummaryError/>
      </v-col>
    </v-row>
    <v-row v-else no-gutters class="mb-15">
      <v-col cols="12" sm="12" md="8" lg="8" xl="8" offset-md="2" offset-lg="2" offset-xl="2" class="pt-10 mt-10">
        <SummaryCountriesSearch></SummaryCountriesSearch>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8" offset-md="2" offset-lg="2" offset-xl="2" class="pt-10">
        <SummaryCountriesList></SummaryCountriesList>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Covid19APIFooterVue/>
      </v-col>
    </v-row>
    <router-view/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import SummaryError from './SummaryError.vue'
import SummaryLoading from './SummaryLoading.vue'
import SummaryCountriesList from './SummaryCountriesList.vue'
import SummaryCountriesSearch from './SummaryCountriesSearch.vue'
import Covid19APIFooterVue from '@/components/atoms/Covid19APIFooter.vue'

export default Vue.extend({
  name: 'Summary',
  computed: {
    ...mapState('Summary', ['loading', 'error'])
  },
  methods: {
    ...mapActions('Summary', ['getSummaryDataFromApi'])
  },
  mounted () {
    this.getSummaryDataFromApi()
  },
  components: {
    SummaryError,
    SummaryLoading,
    SummaryCountriesList,
    SummaryCountriesSearch,
    Covid19APIFooterVue
  }
})
</script>

<style scoped>
  .summary {
    background-image: url('/assets/img/summary/doctors.svg');
    background-position: 100% 0%;
    background-repeat: no-repeat;
    padding-top: 80px;
  }

  .summary__title {
    font-size: 50px;
  }
  .summary__sub-title {
    font-size: 16px;
  }
</style>
