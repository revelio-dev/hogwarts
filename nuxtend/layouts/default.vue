<template>
  <div>
    <!-- latest -->
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
    <!-- core style only -->
    <link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
    <danavbar />
    <div class="container container-fluid">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Danavbar from "@/components/Danavbar.vue";

export default {
  components: {
    Danavbar
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
</style>
