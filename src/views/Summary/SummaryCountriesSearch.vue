<template>
  <v-card class="summary-countries-search elevation-1 pa-2">
    <h2 class="secondary--text mt-5 d-flex justify-center">
      Filtrar dados sobre um país
    </h2>
    <v-card-text>
      <v-row>
        <v-col col="12" sm="12" md="10" lg="10" xl="10" offset-md="1" offset-lg="1" offset-xl="1">
          <v-text-field
            prepend-inner-icon="search"
            color="primary"
            placeholder="Digite o nome do país"
            autofocus
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SummaryCountriesSearch'
})
</script>
