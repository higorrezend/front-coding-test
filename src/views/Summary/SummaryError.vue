<template>
  <div>
    <v-card class="summary-error elevation-0 pa-2 mb-5" color="transparent">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <img src="assets/img/summary/summary-error.png"/>
            <h2 class="secondary--text pb-10">
              {{ error.title }}
            </h2>
            <h3 class="secondary--text pb-2">
              {{ error.message }}
            </h3>
            <span>Código do erro: {{ error.id }}</span>
          </v-col>
          <v-col>
            <v-btn outlined color="primary" @click="getSummaryDataFromApi()">
              Tentar buscar dados novamente
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'SummaryError',
  computed: {
    ...mapState('Summary', ['error'])
  },
  methods: {
    ...mapActions('Summary', ['getSummaryDataFromApi'])
  }
})
</script>

<style scoped>
  .summary-error {
    text-align: center;
  }
  .summary-error h2 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 30px;
  }
  .summary-error img {
    width: 100%;
    max-width: 200px;
    margin-top: 80px;
  }
</style>
