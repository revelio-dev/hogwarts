<template>
  <b-form @submit.stop.prevent="search()">
    <b-form-group id="input-group-1" label="Ubicación: " label-for="input-1">
      <div class="d-flex justify-content-center">
        <b-form-input  @keyup.enter="search()" v-model="param"  id="input-1" required placeholder="Ubicación"></b-form-input>
        <b-button type="submit"  class="ml-2">Mostrar</b-button>
      </div>
    </b-form-group>
  </b-form>
</template>

<script>
import axios from 'axios';
export default {
  name: "buscador",
  data () {
    return {
      ciudades: null,
      ciudadEncontrada: {
         nombre: null,
         temp: null,
         estado: null,
         icon: null}
    }
  },
  mounted (){
    
  },
  methods: {
    search: function() {
      
      axios
     .get(`https://api.openweathermap.org/data/2.5/weather?q=${ this.param },es&appid=375b5b72defecfdfccfa090d50f49db4&lang=es&units=metric`)
     .then(response => {
       this.ciudades = response.data;
       console.log(this.ciudades);
       this.ciudadEncontrada.nombre = this.ciudades.name;
       this.ciudadEncontrada.temp = this.ciudades.main.temp;
       this.ciudadEncontrada.estado = this.ciudades.weather[0].description;
       this.ciudadEncontrada.icon = this.ciudades.weather[0].icon;
     })

      if (this.ciudadEncontrada) {
        console.log("Existe");
        console.log(this.ciudadEncontrada)
        this.$emit('change', this.ciudadEncontrada)
      } else {
        console.log("No existe");
        this.$emit('change', null)
      }
    }
  }
};
</script>

<style>
</style>