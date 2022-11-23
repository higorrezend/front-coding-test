<template>
  <div :class="{'card-statistic__has-route': route}" @click="toToRoute()">
    <div class="card-statistic__label secondary--text mt-5 d-flex justify-center">
      {{ label }}
    </div>
    <div class="card-statistic__number primary--text mt-5 d-flex justify-center">
      {{ number | number }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardStatistic',
  methods: {
    toToRoute () {
      if (this.route) {
        this.$router.push(this.route)
      }
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      default: 0
    },
    route: {
      type: Object,
      default: null
    }
  }
})
</script>

<style scoped>
  .card-statistic__label {
    font-size: 18px;
    font-weight: bold;
  }
  .card-statistic__number {
    font-size: 30px;
    font-weight: bold;
  }
  .card-statistic__has-route {
    cursor: pointer;
  }
</style>
