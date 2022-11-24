<template>
  <div>
    <v-dialog v-model="dialog" width="598" scrollable>
      <v-card>
        <v-app-bar dense flat color="transparent">
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                :loading="loading"
                @click="getCountryStatusConfirmed()"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
            </template>
            <span>Atualizar informações</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="closeDialog()"
              >
                <v-icon>close</v-icon>
              </v-btn>
            </template>
            <span>Fechar janela</span>
          </v-tooltip>
        </v-app-bar>
        <v-card-text class="country-confirmed-cases_footer__content">
          <CountryCasesContent/>
          <Covid19APIFooterVue/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CountryCasesContent from './CountryCasesContent.vue'
import Covid19APIFooterVue from '@/components/atoms/Covid19APIFooter.vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'CountryConfirmedCases',
  data: () => ({
    dialog: true
  }),
  computed: {
    ...mapState('CountryStatus', ['loading'])
  },
  methods: {
    ...mapActions('CountryStatus', ['getCountryStatusConfirmedDataFromApi', 'clearCountryStatus']),
    closeDialog (): void {
      this.dialog = false
      setTimeout(() => {
        this.$router.push({ name: 'summary' })
      }, 100)
    },
    getCountryStatusConfirmed (): void {
      this.getCountryStatusConfirmedDataFromApi(this.$route.params.country)
    }
  },
  mounted (): void {
    this.getCountryStatusConfirmed()
  },
  destroyed (): void {
    this.clearCountryStatus()
  },
  components: {
    Covid19APIFooterVue,
    CountryCasesContent
  }
})
</script>

<style scoped>
  .country-confirmed-cases_footer {
    text-align: center;
    display: block;
    font-size: 15px;
  }
  .country-confirmed-cases_footer__content {
    height: 500px;
  }
</style>
