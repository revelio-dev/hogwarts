<template>
  <div class="container-fluid">
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th>TEMPERATURE</b-th>
          <b-th>HUMID</b-th>
          <b-th>MIN. TEMPERATURE</b-th>
          <b-th>MAX. TEMPERATURE</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>{{data.temp}}&deg;C</b-td>
          <b-td>{{data.humidity}}%</b-td>
          <b-td>{{data.tempMin}}ºC</b-td>
          <b-td>{{data.tempMax}}&deg;C</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import { API_KEY, URL } from "../../service/const";

export default {
  name: "Humidityweather",
  props: ["data"],

  data() {
    return {
      tableVariant: "info"
    };
  },
  computed: {},
  mounted() {
    console.log(this.temp);
  },
  methods: {}
};
</script>

<style scoped>
</style>