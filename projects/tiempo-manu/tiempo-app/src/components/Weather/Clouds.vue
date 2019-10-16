<template>
  <div id="cloud" class="col-xs-4">
    <h2>Clouds</h2>
    <p>Coverage - {{ cloud.all }}%</p>
  </div>
</template>

<script>
export default {
  props: ["cloud"]
};
</script>

<style>
</style>