<template>
  <div id="details" class="text-center">
    <buscador @change="cargaCiudad"></buscador>
    <div v-if="iniciado" >
      <div v-if="ciudadActual" >
        <div>
          <!-- Nombre Ciudad-->
          <p> {{ ciudadActual.name }}</p>
          <!-- Temperatura-->
          <h1 class="display-1">{{ ciudadActual.temperature }}</h1>
          <!-- Cielo (Soleado, Nublado, etc.)-->
          <p> {{ ciudadActual.sky }} </p>
        </div>
      </div>
      <div v-else>
        <h1>NOOOO</h1>
      </div>
    </div>
  </div>
</template>

<script>
 export default{
    data () {
      return {
        ciudadActual: null,
        iniciado: false
      }
    },
    methods: {
      cargaCiudad (ciudadEncontrada) {
        console.log('changed', ciudadEncontrada)
        this.iniciado = true
        this.ciudadActual = ciudadEncontrada
      }
    }
}
</script>

<style>

</style>
