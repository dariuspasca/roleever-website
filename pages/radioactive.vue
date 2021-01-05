<template>
  <div class="container mx-auto min-h-screen xs:h-full py-20">
    <number-results-chart
      v-if="show"
      class="w-7/12 mx-auto"
      :data="barChartData"
      :options="barChartOptions"
      :height="200"
    />
    <rolls-results-chart
      v-if="show"
      class="w-7/12 mx-auto"
      :data="lineChartData"
      :options="lineChartOptions"
      :height="200"
    />
  </div>
</template>

<script>
export default {
  async fetch() {
    const data = await this.$axios
      .get(process.env.baseURL + '/d20.json')
      .then((res) => res.data)
    this.barChartData.labels = data.resultsPerNumber.labels
    this.barChartData.datasets[0].data = data.resultsPerNumber.data

    // Preparing time series for line chart
    const limit = 10 // show only last 10 hours data
    const d = new Date()
    const hour = d.getUTCHours()

    /* 
        The JSON files contains all hours
        We splice the hours from now (UTC time) to limit
    */
    const times = data.resultsPerHour.labels
    let hours = times.slice(0, hour)

    /* If hours array length is not at least equal to time limit, it means we have to get hours from previous day (eg: is 2 AM) 
      Otherwise we just need to splice the array and only get a number of hours within the limit
    */
    if (hours.length < limit) {
      const res = hours.concat(
        times.splice(times.length - hours.length, times.length)
      )
      hours = res
    } else if (hours.length > limit) {
      hours = hours.slice(Math.max(hours.length - limit, 0))
    }

    // Data ordered by hour [0 - 23]
    const lineData = data.resultsPerHour.data

    /*   We cycle the hours array that we computed and:
      - Get respective data for each hour
      - Conver 24h format to AM / PM
      - Push data
   */
    hours.forEach((element) => {
      this.lineChartData.datasets[0].data.push(lineData[element])
      const apM = element < 12 ? 'AM' : 'PM'
      const time = element % 12 || 12
      this.lineChartData.labels.push(time + ':00 ' + apM)
    })
  },

  data() {
    return {
      show: false,
      barChartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: 'rgb(204,171,57,0.7)',
            hoverBackgroundColor: 'rgb(204,171,57,0.7)',
            borderWidth: 2,
          },
        ],
      },
      lineChartData: {
        labels: [],
        datasets: [
          {
            data: [],
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
      lineChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Rolls Per Hour',
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
