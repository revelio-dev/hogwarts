<template>
  <div id="wind" class="col-xs-4">
    <h2>Wind</h2>
    <p>Speed - {{ wind }}</p>
    <p>Direction - {{ degreesToCompass(wind) }}</p>
  </div>
</template>

<script>
export default {
  props: ["wind"],

  methods: {
    degreesToCompass: function(deg) {
      var val = Math.floor(deg / 22.5 + 0.5);
      var dir = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
      ];

      return dir[val % 16];
    }
  }
};
</script>

<style>
</style>