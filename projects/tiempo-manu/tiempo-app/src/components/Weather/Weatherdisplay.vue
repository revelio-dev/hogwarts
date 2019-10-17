<template>
  <div id="weatherDisplay" class="col-xs-4">
    <h2>{{ weatherDisplay.main }}</h2>
    <p>{{ weatherDisplay.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["weatherDisplay"]
};
</script>

<style>
</style>