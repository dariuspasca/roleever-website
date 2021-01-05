import Vue from 'vue'
import { Bar } from 'vue-chartjs'

Vue.component('number-results-chart', {
  extends: Bar,
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
})
