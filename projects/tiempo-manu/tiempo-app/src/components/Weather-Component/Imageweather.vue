<template>
  <div class="container-fluid" align="center" style="background: darkturquoise; ">
    <img :src="icon" alt="Weather icon" />
  </div>
</template>

<script>
export default {
  name: "Imageweather",
  props: ["icon"]
};
</script>

<style>
</style>