<template>
  <v-card class="summary-countries-search elevation-1 pa-2">
    <h2 class="secondary--text mt-5 d-flex justify-center">
      Filtrar dados sobre um país
    </h2>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="5" lg="6" xl="6" offset-md="1" offset-lg="1" offset-xl="1">
          <v-text-field
            v-model="search"
            prepend-inner-icon="search"
            color="primary"
            placeholder="Digite o nome do país"
            autofocus
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="5" lg="4" xl="4">
          <v-select
            v-model="order"
            :items="orderOptions"
            label="Ordenar por:"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'SummaryCountriesSearch',
  computed: {
    ...mapGetters('Summary', ['orderOptions']),
    search: {
      get () {
        return this.$store.state.Summary.search
      },
      set (value: string): void {
        this.$store.commit('Summary/SET_SEARCH', value)
      }
    },
    order: {
      get () {
        return this.$store.state.Summary.order
      },
      set (value: string): void {
        this.$store.commit('Summary/SET_ORDER', value)
      }
    }
  }
})
</script>
