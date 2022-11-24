<template>
  <div class="country-confirmed-cases-content mt-5">
    <h1 class="pb-5 secondary--text">
      {{ contryName }}
    </h1>
    <h2 class="primary--text">Casos confirmados nos últimos 5 dias</h2>
    <v-card flat class="mt-5">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">
                Data
              </th>
              <th class="text-center">
                N° de casos confirmados
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(country, countryIndex) in countryStatus" :key="countryIndex">
              <td class="country-confirmed-cases-content__date">
                <strong class="country-confirmed-cases-content__date">
                  {{ country.Date | date('DD/MM/YYYY') }}
                </strong>
              </td>
              <td class="country-confirmed-cases-content__cases">
                <strong class="country-confirmed-cases-content__cases">
                  {{ country.Cases | number }}
                </strong>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CountryCasesContent',
  computed: {
    ...mapState('CountryStatus', ['contryName', 'countryStatus'])
  }
})
</script>

<style scoped>
  .country-confirmed-cases-content {
    text-align: center;
  }
  .country-confirmed-cases-content h1 {
    font-size: 38px;
    line-height: 40px;
  }
  .country-confirmed-cases-content__date {
    font-size: 18px;
  }
  .country-confirmed-cases-content__cases {
    font-size: 25px;
  }
</style>
