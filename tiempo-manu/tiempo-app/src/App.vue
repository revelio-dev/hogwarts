<template>
  <div id="app">
    <div class="header">
      <div class="header-img"></div>
    </div>
    <div class="container">
      <div>
        <h1 class="weather">EL TIEMPO</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style>
.weather {
  text-align: center;
  text-rendering: optimizeSpeed;
  text-decoration-style: wavy;
}

.header {
  height: 320px;
}

.header .header-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
}

.header .header-img {
  background-image: url("./assets/images/header-image.jpg");
}
</style>
