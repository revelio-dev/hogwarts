<template>
  <!--<div>
  <b-nav>
    <b-nav-item active left>El tiempo</b-nav-item>
    <div class="row">
        <b-nav-item right>Inicio |</b-nav-item>
        <b-nav-item right>Sobre mi</b-nav-item>
    </div>
  </b-nav>
  </div>-->
  <div>
    <b-navbar>
      <b-navbar-brand :to="{name: 'detalles'}">
        <img src="@/assets/logo.png" alt="logo" class="logo">
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>Inicio</b-nav-item>
        <b-nav-item right>Sobre mi</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "cabecera"
};
</script>

<style lang="scss">
$tamaño-logo: 4em;
.logo{
  width: $tamaño-logo;
}

</style>