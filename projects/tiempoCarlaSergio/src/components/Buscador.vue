<template>
  <b-form>
    <b-form-group id="input-group-1" label="Ubicación: " label-for="input-1">
      <div class="d-flex justify-content-center">
        <b-form-input  v-model="param"  id="input-1" required placeholder="Ubicación"></b-form-input>
        <b-button @click="search()" class="ml-2">Mostrar</b-button>
      </div>
    </b-form-group>
  </b-form>
</template>

<script>
import json from "@/Json/ciudades.json"
export default {
  name: "buscador",
  data () {
    return {
      param: "",
      ciudades: json,
    }
  },
  methods: {
    search: function() {
      let ciudadEncontrada = null
      this.ciudades.forEach((ciudad) => {
        if(this.param==ciudad.name||this.param==ciudad.name.toLowerCase()){
          ciudadEncontrada = ciudad
        }
      });

      if (ciudadEncontrada) {
        console.log("Existe");
        this.$emit('change', ciudadEncontrada)
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