<template>
  <div id="app" class="col-md-6 col-lg-5 col-xl-4 mx-auto">
    <cabecera></cabecera>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
$fuente: Helvetica, Arial, sans-serif;
$margen: 60px;
#app {
  font-family: $fuente;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: $margen;
}
</style>
