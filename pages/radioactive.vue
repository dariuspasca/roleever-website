<template>
  <div class="container mx-auto min-h-screen xs:h-full py-20">
    <number-results-chart
      v-if="show"
      class="w-7/12 mx-auto"
      :data="barChartData"
      :options="barChartOptions"
      :height="200"
    />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.barChartData.datasets.data = await fetch(
      'https://www.roleever.com/d20.json'
    ).then((res) => res.json())
  },
  data() {
    return {
      show: false,
      mountains: [],
      barChartData: {
        labels: Array.from({ length: 20 }, (_, i) => i + 1),
        datasets: [
          {
            data: [
              8016,
              23814,
              73512,
              51779,
              40060,
              58744,
              20515,
              44561,
              28224,
              68612,
              12102,
              65744,
              81340,
              32568,
              37107,
              15728,
              4002,
              74955,
              59565,
              48540,
            ],
            backgroundColor: 'rgb(204,171,57,0.7)',
            hoverBackgroundColor: 'rgb(204,171,57,0.7)',
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Results Per Number',
          fontSize: 24,
          fontColor: '#212121',
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.show = true // show will only be set to true on the client. This keeps the DOM-tree in sync.
  },
}
</script>
