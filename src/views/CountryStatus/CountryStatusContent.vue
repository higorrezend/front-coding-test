<template>
  <div class="country-status-content mt-5">
    <h1 id="country-status-content__country-name" class="pb-5 secondary--text">
      {{ contryName }}
    </h1>
    <h2 id="country-status-content__description" class="primary--text">Casos confirmados nos últimos 5 dias</h2>
    <v-card flat class="mt-5">
      <v-simple-table id="country-status-content__table">
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
              <td class="country-status-content__date">
                <strong class="country-status-content__date">
                  {{ country.Date | date('DD/MM/YYYY') }}
                </strong>
              </td>
              <td class="country-status-content__cases">
                <strong class="country-status-content__cases">
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
  name: 'CountryStatusContent',
  computed: {
    ...mapState('CountryStatus', ['contryName', 'countryStatus'])
  }
})
</script>

<style scoped>
  .country-status-content {
    text-align: center;
  }
  .country-status-content h1 {
    font-size: 38px;
    line-height: 40px;
  }
  .country-status-content__date {
    font-size: 18px;
  }
  .country-status-content__cases {
    font-size: 25px;
  }
</style>
