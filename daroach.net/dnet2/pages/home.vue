<template>
  <div class="flex flex-col select-none pb-72">
    <h1 class="home-header-1">Welcome to Daroach.net</h1>
    <h2 class="text-center text-gray-200 p-10">
      You have used the power of the internet to connect to a webserver running
      in my apartment.
    </h2>
    <AboutGagan />
    <h1 class="home-header-1">WebServer Traffic</h1>
    <div class="flex flex-grow">
      <total-page-hits />
      <timely-page-hits v-if="false" />
    </div>
    <h1 class="home-header-1">Open Source Projects</h1>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
    >
      <div
        v-for="proj of openSourceProjects"
        :key="proj.title"
        class="dnet-card hover:bg-white hover:text-black max-w-xl"
      >
        <a :href="proj.link" target="_blank" rel="noopener noreferrer" class="">
          <p class="text-2xl p-5">{{ proj.title }}</p>
          <img class="object-scale-down mx-auto p-5" :src="proj.image" />
          <p class="text-justify">{{ proj.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TimelyPageHits from "../components/Charts/TimelyPageHits.vue";
import TotalPageHits from "../components/Charts/TotalPageHits.vue";

export default {
  components: { TotalPageHits, TimelyPageHits },
  layout: "default",
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    return {
      page,
    };
  },
  data() {
    return {
      openSourceProjects: [
        {
          title: "daroach.net",
          description: `
          It has been a life goal to host a website on the internet. I envy those who grew up during the dot com boom. Daroach.net is a stack of web services running on my server.

          I use docker to modularize each microservice, and docker-compose to organize each microservice stack. The nginx-proxy-letencrypt directory contains the primary entrypoint for daroach.net, routing traffic to the other services.

          Organized by domain name, each folder contains the microservice source code, docker-compose.yml stack description, and configuration details.

          This website is is written in javascript, using the Vue and Nuxt Frameworks. The analytics use api.daroach.net, an ExpressJS service.
          `,
          link: "https://github.com/gagandaroach/daroachnet",
          image: "/GitHub_Logo.png",
        },
        {
          title: "MSOE.DEV | The Rosie User Guide",
          description:
            "Rosie is the name of the academic high performance supercomputer for the Milwaukee School of Engineering in Milwaukee, Wisconsin USA. As the system administrator of the 1000 CPU Core, 10 TB RAM, 500TB Storage, and 100+GPU supercomputer, I developed this page to guide MSOE Computer Science, Software Engineering, Electrical Engineering, and Campus Faculty, Students, and Industry Partners with learning how to use Rosie.",
          link: "https://msoe.dev",
          image:
            "https://raw.githubusercontent.com/gagandaroach/rosie/master/docs/_images/ROSIE.jpg",
        },
        {
          title: "MONAI | Medical Open Network for AI",
          description: `
            MONAI is a PyTorch-based, open-source framework for deep learning in healthcare imaging, part of PyTorch Ecosystem. Its ambitions are:

            developing a community of academic, industrial and clinical researchers collaborating on a common foundation;
            creating state-of-the-art, end-to-end training workflows for healthcare imaging;
            providing researchers with the optimized and standardized way to create and evaluate deep learning models.
            `,
          link: "https://monai.io/",
          image: "https://monai.io/img/MONAI-logo-white.png",
        },
        {
          title: "medschooldreams.com",
          description:
            "A NextJS webservice for my brother & cousin's startup - medschooldreams.",
          link: "https://medschooldreams.com",
          image: "https://medschooldreams.com/logo_transparent.png",
        },
                {
          title: "WSI Proccessing",
          description:
            "Collection of python data processing ETL tools and jupyter notebooks I use to prepare image data for neural network training and research.",
          link: "https://github.com/gagandaroach/python_image_prep",
          image: "/GitHub_Logo.png",
        },
      ],
    };
  },
};
</script>

<style>
.home-header-1 {
  @apply text-5xl text-gray-200 font-bold text-center m-10;
}
</style>