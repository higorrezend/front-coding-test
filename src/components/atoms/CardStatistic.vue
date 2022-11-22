<template>
  <div :class="{'countries-list__has-route': route}" @click="toToRoute()">
    <div class="countries-list__label secondary--text mt-5 d-flex justify-center">
      {{ label }}
    </div>
    <div class="countries-list__number primary--text mt-5 d-flex justify-center">
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
  .countries-list__label {
    font-size: 18px;
    font-weight: bold;
  }
  .countries-list__number {
    font-size: 30px;
    font-weight: bold;
  }
  .countries-list__has-route {
    cursor: pointer;
  }
</style>
