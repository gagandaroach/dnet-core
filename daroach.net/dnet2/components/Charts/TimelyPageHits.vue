<template>
  <div class="flex flex-col dnet-card">
    <client-only class="contents">
      <h1 class="text-xl">Total Page Hits</h1>
      <LineChart
        :data="chartData"
        :options="chartOptions"
        class=""
      />
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
        labels: this.chartRoutes,
        datasets: []
      };
    },
  },
  data() {
    return {
      chartLabels: ["daroach.net", "/home", "other"],
      chartRoutes: ["/", "/home", "other"],
      chartOptions: {
        scales: {},
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