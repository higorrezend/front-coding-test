<template>
  <div>
    <v-card class="countries-search elevation-1 pa-2">
      <v-card-text>
        <h2 class="secondary--text mt-5 mb-5 d-flex justify-center">
          Country Name
        </h2>
        <v-row>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <CardStatistic
              label="Total de casos"
              :route="{name: 'asdasd'}"
            ></CardStatistic>
          </v-col>
          <v-divider :vertical="!$vuetify.breakpoint.xs" :inset="!$vuetify.breakpoint.xs"></v-divider>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <CardStatistic
              label="Mortes"
            ></CardStatistic>
          </v-col>
          <v-divider :vertical="!$vuetify.breakpoint.xs" :inset="!$vuetify.breakpoint.xs"></v-divider>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <CardStatistic
              label="Fatalidade"
            ></CardStatistic>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardStatistic from '@/components/atoms/CardStatistic.vue'

export default Vue.extend({
  name: 'CountriesList',
  components: {
    CardStatistic
  }
})
</script>

<style scoped>
  .countries-search h2 {
    font-size: 28px;
    font-weight: bold;
  }
</style>
