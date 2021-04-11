<template>
  <div class="container dnet-card">
    <h1 class="flex text-lg">Web Statistics</h1>
    <div class="flex">
      <client-only>
        <BarChart :data="data" :options="chartOptions" />
      </client-only>
    </div>
    <div class="text-sm">{{this.$store.state}}</div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hits: [],
      chartOptions: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  },
  mounted() {
    this.$axios
      .$get(`/hits/${encodeURIComponent(window.location.host)}?api-key=apikey`)
      .then((res) => (this.hits = res));
  },
});
</script>

<style></style>