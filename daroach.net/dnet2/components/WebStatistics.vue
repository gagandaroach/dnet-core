<template>
  <div class="container dnet-card">
    <h1 class="flex text-lg">Web Statistics</h1>
    <div class="flex">
      <client-only>
        <PieChart :data="chartData" :options="chartOptions" />
        <PieChart :data="chartData2" :options="chartOptions" />
      </client-only>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  computed: {
    chartData() {
      return {
        labels: this.chartRoutes,
        datasets: [
          {
            label: "Page Hits",
            data: this.$store.getters["hits/getPageCounts"](this.chartRoutes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // "rgba(255, 206, 86, 1)",
              // "rgba(75, 192, 192, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    },
    chartData2() {
      return {
        labels: this.$store.getters["hits/getRoutes"],
        datasets: [
          {
            label: "Page Hits",
            data: this.$store.getters["hits/getPageCounts"](this.chartRoutes, true),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // "rgba(255, 206, 86, 1)",
              // "rgba(75, 192, 192, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    },
  },
  data() {
    return {
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      // chartRoutes: this.$store.getters['hits/getRoutes'],
      chartRoutes: ["/", "/home"],
    };
  },
});
</script>

<style></style>