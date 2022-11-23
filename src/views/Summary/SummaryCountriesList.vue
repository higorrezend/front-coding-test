<template>
  <div>
    <div v-if="countriesFormated.length > 0">
      <v-card
        v-for="country in countriesFormated"
        :key="country.id"
        class="summary-countries-search elevation-1 pa-2 mb-5"
      >
        <v-card-text>
          <h2 class="secondary--text mt-5 mb-5 d-flex justify-center">
            {{ country.Country }}
          </h2>
          <v-row>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4">
              <CardStatistic
                label="Total de casos"
                :number="country.TotalConfirmed"
                :route="{name: 'asdasd'}"
              ></CardStatistic>
            </v-col>
            <v-divider :vertical="!$vuetify.breakpoint.xs" :inset="!$vuetify.breakpoint.xs"></v-divider>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4">
              <CardStatistic
                label="Mortes"
                :number="country.TotalDeaths"
              ></CardStatistic>
            </v-col>
            <v-divider :vertical="!$vuetify.breakpoint.xs" :inset="!$vuetify.breakpoint.xs"></v-divider>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4">
              <CardStatistic
                label="Fatalidade"
                :number="country.fatalities"
                appendNumber="%"
              ></CardStatistic>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-btn
        block
        large
        color="primary"
        :disabled="countriesFormated.length < perPage"
        @click="loadMoreCountries()"
      >
        Carregar mais países
      </v-btn>
    </div>
    <SummaryCountriesListNotFound v-else/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'
import SummaryCountriesListNotFound from './SummaryCountriesListNotFound.vue'
import CardStatistic from '@/components/atoms/CardStatistic.vue'

export default Vue.extend({
  name: 'SummaryCountriesList',
  computed: {
    ...mapState('Summary', ['perPage']),
    ...mapGetters('Summary', ['countriesFormated'])
  },
  methods: {
    ...mapActions('Summary', ['loadMoreCountries'])
  },
  components: {
    CardStatistic,
    SummaryCountriesListNotFound
  }
})
</script>

<style scoped>
  .summary-countries-search h2 {
    font-size: 28px;
    font-weight: bold;
  }
</style>
