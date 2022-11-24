<template>
  <div class="country-confirmed-cases-content mt-5">
    <h1 class="pb-5 secondary--text">
      {{ mock[0].Country }}
    </h1>
    <h2 class="secondary--text">Casos confirmados nos últimos 5 dias</h2>
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
            <tr v-for="(country, countryIndex) in mock" :key="countryIndex">
              <td class="country-confirmed-cases-content__date">
                <strong class="country-confirmed-cases-content__date">{{ country.Date | date('DD/MM/YYYY') }}</strong>
              </td>
              <td class="country-confirmed-cases-content__cases">
                <strong class="country-confirmed-cases-content__cases">{{ country.Cases }}</strong>
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

export default Vue.extend({
  name: 'CountryConfirmedCasesContent',
  data: () => ({
    mock: JSON.parse(`[
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "-14.24",
        "Lon": "-51.93",
        "Cases": 0,
        "Status": "confirmed",
        "Date": "2020-01-22T00:00:00Z"
      },
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "-14.24",
        "Lon": "-51.93",
        "Cases": 0,
        "Status": "confirmed",
        "Date": "2020-01-23T00:00:00Z"
      },
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "-14.24",
        "Lon": "-51.93",
        "Cases": 0,
        "Status": "confirmed",
        "Date": "2020-01-24T00:00:00Z"
      },
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "-14.24",
        "Lon": "-51.93",
        "Cases": 0,
        "Status": "confirmed",
        "Date": "2020-01-25T00:00:00Z"
      },
      {
        "Country": "Brazil",
        "CountryCode": "BR",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "-14.24",
        "Lon": "-51.93",
        "Cases": 0,
        "Status": "confirmed",
        "Date": "2020-01-26T00:00:00Z"
      }
    ]`)
  })
})
</script>

<style scoped>
  .country-confirmed-cases-content {
    text-align: center;
  }
  .country-confirmed-cases-content__date {
    font-size: 18px;
  }
  .country-confirmed-cases-content__cases {
    font-size: 25px;
  }
</style>
