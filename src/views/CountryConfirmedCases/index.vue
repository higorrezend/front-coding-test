<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-app-bar dense flat color="transparent">
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
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
        <v-card-text>
          <CountryConfirmedCasesContent/>
        </v-card-text>
        <Covid19APIFooterVue/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Covid19APIFooterVue from '@/components/atoms/Covid19APIFooter.vue'
import CountryConfirmedCasesContent from './CountryConfirmedCasesContent.vue'

export default Vue.extend({
  name: 'CountryConfirmedCases',
  data: () => ({
    dialog: true
  }),
  methods: {
    closeDialog (): void {
      this.dialog = false
      setTimeout(() => {
        this.$router.push({ name: 'summary' })
      }, 100)
    }
  },
  components: {
    Covid19APIFooterVue,
    CountryConfirmedCasesContent
  }
})
</script>

<style scoped>
  .country-confirmed-cases_footer {
    text-align: center;
    display: block;
    font-size: 15px;
  }
</style>
