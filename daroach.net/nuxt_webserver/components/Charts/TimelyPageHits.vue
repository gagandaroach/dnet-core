<template>
  <div class="flex flex-col dnet-card">
    <client-only class="contents">
      <h1 class="text-xl">Timely Page Hits</h1>
      <LineChart :data="chartData" :options="chartOptions" class="" />
      <select v-model="timePeriod" class="dnet-card-color">
        <option value="day">Days</option>
        <option value="week">Weeks</option>
        <option value="month">Months</option>
        <option value="year">Years</option>
      </select>
      <span>Selected: {{ timePeriod }}</span>
    </client-only>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  computed: {
    pageCounts() {
      return this.$store.getters["hits/getPageCounts"](this.chartRoutes, true);
    },
    chartData() {
      return {
        labels: this.chartLabels,
        datasets: this.$store.getters["hits/getRoutes"].map((route) => ({
          label: route,
          data: this.$store.getters["hits/getRouteHits"](route).map(
            // (hit) => (hit.date)
            (hit) => ({ x: hit.date, y: 1 })
          ),
          borderColor: "#FFFFFF",
          backgroundColor: "#000000",
        })),
      };
    },
  },
  data() {
    return {
      timePeriod: "Days",
      chartRoutes: this.$store.getters["hits/getRoutes"],
      chartOptions: {
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",
            },
          ],
          title: {
            display: false,
          },
        },
      },
      chartBgColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      chartBorderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      chartBorderWidth: 1,
    };
  },
});
</script>

<style></style>