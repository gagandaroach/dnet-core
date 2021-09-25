<template>
  <div class="flex flex-col select-none pb-72 space-y-20">
    <div class="mt-20">
      <h1 class="home-header-1">Daroach.net Home Page</h1>
      <h2 class="text-center text-gray-200">
        You have used the power of the internet to connect to a
        <a
          href="https://www.instagram.com/p/BtSgNa8ni0i/?utm_source=ig_web_options_share_sheet"
          class="font-bold hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          webserver
        </a>
        {{ " " }}running in my apartment.
      </h2>
    </div>
    <AboutGagan />
    <div class="container mx-auto content-center">
      <h1 class="home-header-1">Social Media Links</h1>
      <Socials />
    </div>
    <!-- <h1 class="home-header-1">WebServer Traffic</h1>
    <div class="flex flex-grow">
      <total-page-hits />
      <timely-page-hits v-if="false" />
    </div> -->
    <div class="container mx-auto">
      <h1 class="home-header-1">Open Source Projects</h1>
      <p class="home-subline-1">
        Computers are interesting. The magic of the online community sharing
        knowledge and free code with one another enabled me to find success and
        learn their system. Here I share some of my projects in the hope to pay
        it forward to someone else, maybe you.
      </p>
    </div>
    <card-grid :content="openSourceProjects" />
    <h1 class="home-header-1">Undergraduate Research</h1>
    <card-grid :content="undergradResearch" />

    <h1 class="home-header-1">That's It!</h1>
    <p class="home-subline-1">
      I incrementally add more to the site. Drop by again sometime to see what's changed. Lata :)
    </p>
  </div>
</template>

<script>
import CardGrid from "../components/CardGrid.vue";
import TimelyPageHits from "../components/Charts/TimelyPageHits.vue";
import TotalPageHits from "../components/Charts/TotalPageHits.vue";
import Socials from "../components/Socials.vue";

export default {
  components: { TotalPageHits, TimelyPageHits, CardGrid, Socials },
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
          subtitle:
            "The source code for my web server microservices including this website.",
          description: `
          It has been a life goal to host a website on the internet. I envy those who grew up during the dot com boom. Daroach.net is a stack of web services running on my server.

          I use docker to modularize each microservice, and docker-compose to organize each microservice stack. The nginx-proxy-letencrypt directory contains the primary entrypoint for daroach.net, routing traffic to the other services.

          Organized by domain name, each folder contains the microservice source code, docker-compose.yml stack description, and configuration details.

          This website is is written in javascript, using the Vue and Nuxt Frameworks. The analytics use api.daroach.net, an ExpressJS service.
          `,
          link: "https://github.com/gagandaroach/daroachnet",
          image: "/donuts.gif",
        },
        {
          title: "MSOE.DEV | The Rosie User Guide",
          subtitle:
            "The Milwaukee School of Engineering Supercomputer User Guide",
          description:
            "Rosie is the name of the academic high performance supercomputer for the Milwaukee School of Engineering in Milwaukee, Wisconsin USA. When I was the system administrator of the 1000 CPU Core, 10 TB RAM, 500TB Storage, and 100+GPU supercomputer, I developed this page to guide MSOE Computer Science, Software Engineering, Electrical Engineering, and Campus Faculty, Students, and Industry Partners with learning how to use Rosie.",
          link: "https://msoe.dev",
          image:
            "https://raw.githubusercontent.com/gagandaroach/rosie/master/docs/_images/ROSIE.jpg",
        },
        {
          title: "MONAI | Medical Open Network for AI",
          subtitle: "A pytorch extension framework for medical imaging.",
          description: `
            When I interned at Nvidia in the summer of 2020, I worked remove (Covid :sadface:) and alongside incredibly intelligent engineers and research scientists in computer science and medicine. I joined the team in contributing to this open source project.
            
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
          subtitle: "Inspiring PreMedicine students towards their dreams.",
          description:
            "A NextJS webservice for my brother & cousin's startup - medschooldreams.",
          link: "https://medschooldreams.com",
          image: "https://medschooldreams.com/logo_transparent.png",
        },
        {
          title: "WSI Proccessing",
          subtitle: "",
          description:
            "Collection of python data processing ETL tools and jupyter notebooks I use to prepare image data for neural network training and research. Useful for histology image processing and deep learning data preperation. Handles images bigger than computer RAM!",
          link: "https://github.com/gagandaroach/python_image_prep",
          image: "",
        },
      ],
      undergradResearch: [
        {
          title:
            "High-resolution Controllable Prostatic Histology Synthesis using StyleGAN",
          subtitle:
            "My first research publication, a childhood life goal. Thank you Josiah Yoder - without your leadership this would not have been possible.",
          description: `
          For use of deep learning algorithms in clinical practice, detailed justification for diagnosis is necessary. Con-volutional Neural Networks (CNNs) have been demonstrated to classify prostatic histology using the samediagnostic signals as pathologists.  Using the StyleGAN series of networks, we demonstrate that recent ad-vances in high-resolution image synthesis with Generative Adversarial Networks (GANs) can be applied toprostatic histology.   The trained network can produce novel histology samples indistinguishable from realhistology at 1024x1024 resolution and can learn disentangled representations of histologic semantics that sep-arates at a variety of scales. Through blending of the latent representations, users have the ability to control theprojection of histologic semantics onto a reconstructed image.  When applied to the medical domain withoutmodification, StyleGAN2 is able to achieve a Fréchet Inception Distance (FID) of 3.69 and perceptual pathlength (PPL) of 33.25
          `,
          link: "https://www.scitepress.org/Papers/2021/103939/103939.pdf",
          image: "/histology.png",
        },
        {
          title:
            "Correlation via Synthesis: End-to-end Image Generation and Radiogenomic Learning Based on Generative Adversarial Network",
          subtitle: "Nvidia State of the Art Medical Imaging Deep Learning",
          description: `
          Radiogenomic map linking image features and gene expression profiles has great potential for  non-invasively identifying molecular properties of a particular type of disease.  Conventionally, such map is produced in three independent steps: 1) gene-clustering to metagenes, 2) image feature extraction, and 3) statistical correlation between metagenes and image features. Each step is separately performed and relies on arbitrary measurements without considering the correlation among each other. In this work, we investigate the potential of an end-to-end method fusing gene code with image features to generate synthetic pathology image and learn radiogenomic map simultaneously. To achieve this goal, we develop a multi-conditional generative adversarial network (GAN) conditioned on both background images and gene expression code, synthesizing the corresponding image. Image and gene features are fused at different scales to ensure both the separation of pathology part and background, as well as the realism and quality of the synthesized image. We tested our method on non-small cell lung cancer (NSCLC) dataset. Results demonstrate that the proposed method produces realistic synthetic images, and provides a promising way to find gene-image relationship in a holistic end-to-end manner.
          `,
          link: "https://openreview.net/forum?id=2wAX1X5X6n",
          image: "/rggan.png",
        },
      ],
      startups: [],
    };
  },
};
</script>

<style>
.home-header-1 {
  @apply text-5xl text-gray-200 font-bold text-center m-10;
}
.home-subline-1 {
  @apply text-2xl text-gray-200 text-center m-10;
}
</style>