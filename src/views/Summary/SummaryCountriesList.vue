<template>
  <div>
    <div v-if="countriesFormated.length > 0">
      <v-card
        v-for="country in countriesFormated"
        :key="country.id"
        class="summary-countries-list elevation-1 pa-2 mb-5"
      >
        <v-card-text class="mb-3">

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-card
                flat
                v-bind="attrs"
                v-on="on"
                class="summary-countries-list__country-name-btn mb-8"
                link
                :to="getCountryRoute(country.Slug)"
              >
                <h2 id="summary-countries-list__country-name" class="secondary--text d-flex justify-center">
                  {{ country.Country }}
                </h2>
              </v-card>
            </template>
            <span>Ver últimos casos confirmados</span>
          </v-tooltip>
          <v-row>
            <v-col cols="12" sm="4" md="4" lg="4" xl="4">
              <CardStatistic
                label="Total de casos"
                :number="country.TotalConfirmed"
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
import { COUNTRY_STATUS_ROUTER_NAME } from '@/router/routers/countryStatus'
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
    ...mapActions('Summary', ['loadMoreCountries']),
    getCountryRoute (countrySlug: string) {
      return {
        name: COUNTRY_STATUS_ROUTER_NAME,
        params: {
          country: countrySlug
        }
      }
    }
  },
  components: {
    CardStatistic,
    SummaryCountriesListNotFound
  }
})
</script>

<style scoped>
  .summary-countries-list h2 {
    font-size: 28px;
    font-weight: bold;
  }
  .summary-countries-list__country-name-btn {
    text-transform: capitalize;
    white-space: pre-line;
    text-align: center;
    word-wrap: break-word;
  }
  #summary-countries-list__country-name {
    white-space: pre-line;
    text-align: center;
    word-wrap: break-word;
  }
</style>
