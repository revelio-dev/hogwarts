<template>
  <div id="sun" class="col-xs-4">
    <h2>Sun</h2>
    <p>Sunrise - {{ timestampToDate(sun.sunrise) }}</p>
    <p>Sunset - {{ timestampToDate(sun.sunset) }}</p>
  </div>
</template>

<script>
export default {
  props: ["sun"],

  methods: {
    timestampToDate: function(timestamp) {
      var date = new Date(timestamp * 1000);
      return date.toString();
    }
  }
};
</script>

<style>
</style>