<template>
  <v-container class="countries">
    <v-row no-gutters>
      <v-col xs12 sm12 md6 lg6 xl6>
        <h1 class="countries__title secondary--text">Conheça o Covidômetro</h1>
        <h5 class="countries__sub-title secondary--text">
          Fique atualizado com velocidade e transparência.
          O Covidômetro é uma ferramenta que mostra para você
          em tempo real o número de casos e óbitos relacionados
          a pandemia da COVID-19 ao redor do mundo.
        </h5>
      </v-col>
      <v-col xs12 sm12 md6 lg6 xl6></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Countries'
})
</script>

<style scoped>
  .countries {
    background-image: url('/assets/img/home/doctors.svg');
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
