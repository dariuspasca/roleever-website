<template>
  <div
    class="flex flex-col w-7/12 xs:w-11/12 sm:w-10/12 md:w-10/12 mx-auto min-h-screen xs:h-full py-20 text-left"
  >
    <picture>
      <img
        src="/images/radioactiveRoll.png"
        alt="Radioactive Roll Logo"
        width="500"
        height="500"
        loading="lazy"
        class="w-48 xs:w-40 h-auto mx-auto"
      />
    </picture>

    <h1 class="title xs:w-11/12 w-8/12 mx-auto pb-10 text-center">
      {{ page.title }}
    </h1>

    <p>
      {{ page.description }}
    </p>
    <p>
      {{ page.why_p1 }}
      <a
        href="https://www.fourmilab.ch/hotbits/how3.html"
        alt="HotBits"
        class="text-primary"
        >HotBits</a
      >
      {{ page.why_p2 }}
    </p>

    <p class="py-4">
      {{ page.monitor }}
    </p>
    <client-only :placeholder="page.loading">
      <div class="flex flex-col w-full pt-20">
        <number-results-chart
          v-if="show"
          class="w-full mx-auto"
          :data="barChartData"
          :options="barChartOptions"
        />
        <p class="float-right text-right text-gray-600 text-xs pb-10">
          {{ $t('radioactive.results_since') }} {{ since
          }}{{ $t('radioactive.results_time') }}
        </p>
        <rolls-results-chart
          v-if="show"
          class="w-full mx-auto"
          :data="lineChartData"
          :options="lineChartOptions"
        />
        <p class="float-right text-right text-gray-600 text-xs">
          {{ $t('radioactive.rolls') }}
        </p>
      </div>
      <p class="text-left text-gray-600 pt-10 -mb-10">
        {{ $t('radioactive.last_update') }} {{ lastUpdate }} UTC
      </p>
    </client-only>
  </div>
</template>

<script>
import data from '~/static/example-d20.json'
export default {
  async asyncData({ $content, $axios }) {
    const pages = []
    const pageEN = await $content(`en/pages/radioactive-rolls`).fetch()
    const pageIT = await $content(`it/pages/radioactive-rolls`).fetch()
    // const data = await $axios
    //   .get(process.env.baseURL + '/d20.json')
    //   .then((res) => res.data)
    pages.push(pageEN)
    pages.push(pageIT)

    return {
      pages,
      data,
    }
  },

  data() {
    return {
      show: false,
      barChartOptions: {
        maintainAspectRatio: false,
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
        maintainAspectRatio: false,
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

  computed: {
    page() {
      if (this.$i18n.locale === 'en') {
        return this.pages[0]
      } else {
        return this.pages[1]
      }
    },
    since() {
      const lastUpdate = new Date(this.data.lastUpdate)
      lastUpdate.setDate(lastUpdate.getDate() - 10)
      const locale = this.$i18n.locale === 'it' ? 'it-IT' : 'en-US'

      return lastUpdate.toLocaleString(locale, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: this.$i18n.locale === 'en',
      })
    },
    lastUpdate() {
      const lastUpdate = new Date(this.data.lastUpdate)
      const locale = this.$i18n.locale === 'it' ? 'it-IT' : 'en-US'

      return lastUpdate.toLocaleString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: this.$i18n.locale === 'en',
      })
    },
    barChartData() {
      const barChartData = {
        labels: this.data.resultsPerNumber.labels,
        datasets: [
          {
            data: this.data.resultsPerNumber.data,
            backgroundColor: 'rgb(204,171,57,0.7)',
            hoverBackgroundColor: 'rgb(204,171,57,0.7)',
            borderWidth: 2,
          },
        ],
      }
      return barChartData
    },
    lineChartData() {
      // Preparing time series for line chart
      const limit = 10 // show only last 10 hours data
      const d = new Date()
      const hour = d.getUTCHours()

      /*
        The JSON files contains all hours
        We splice the hours from now (UTC time) to limit
    */
      const times = this.data.resultsPerHour.labels
      let hours = times.slice(0, hour)

      /* If hours array length is not at least equal to time limit, it means we have to get hours from previous day (eg: is 2 AM)
      Otherwise we just need to splice the array and only get a number of hours within the limit
    */
      if (hours.length < limit) {
        const remainingHours = times.splice(
          times.length - limit + hour,
          times.length
        )
        const res = remainingHours.concat(hours)
        hours = res
      } else if (hours.length > limit) {
        hours = hours.slice(Math.max(hours.length - limit, 0))
      }

      // Data ordered by hour [0 - 23]
      const lineData = this.data.resultsPerHour.data

      /*   We cycle the hours array that we computed and:
      - Get respective data for each hour
      - Conver 24h format to AM / PM
      - Push data
   */
      const rolls = []
      const hoursLabels = []
      hours.forEach((element) => {
        rolls.push(lineData[element])
        const apM = element < 12 ? 'AM' : 'PM'
        const time = element % 12 || 12
        hoursLabels.push(time + ':00 ' + apM)
      })

      const lineCharData = {
        labels: hoursLabels,
        datasets: [
          {
            data: rolls,
            backgroundColor: 'rgb(204,171,57,0.7)',
            hoverBackgroundColor: 'rgb(204,171,57,0.7)',
            borderWidth: 2,
          },
        ],
      }
      return lineCharData
    },
  },
  mounted() {
    this.updateTitle()
    this.show = true // show will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  methods: {
    updateTitle() {
      this.barChartOptions.title.text = this.page.rolls_results
      this.lineChartOptions.title.text = this.page.rolls_total
    },
  },
  head() {
    return {
      title: this.page.meta_header,
      meta: [
        /* Twitter Cards */

        {
          name: 'twitter:card',
          content: this.page.twitter_card,
        },
        {
          name: 'twitter:site',
          content: this.page.twitter_site,
        },
        {
          name: 'twitter:title',
          content: this.page.twitter_title,
        },
        {
          name: 'twitter:description',
          content: this.page.twitter_description,
        },
        {
          name: 'twitter:image',
          content: this.page.twitter_image,
        },

        /* Open Graph */

        {
          name: 'og:title',
          content: this.page.og_title,
        },
        {
          name: 'og:type',
          content: this.page.og_type,
        },
        {
          name: 'og:description',
          content: this.page.og_description,
        },
        {
          name: 'og:locale:image',
          content: this.page.og_image,
        },
        {
          name: 'og:locale:url',
          content: this.page.og_url,
        },

        /* Google / Schema.org  */

        { itemprop: 'name', content: this.page.og_title },
        {
          itemprop: 'description',
          content: this.page.og_description,
        },
        {
          itemprop: 'image',
          content: this.page.og_image,
        },
      ],
    }
  },
}
</script>
