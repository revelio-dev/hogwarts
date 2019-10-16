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
          <img :src="require(`@/assets/${ciudadActual.sky}.png`)" alt="Estado" class="icono mb-1">
          <p><small> {{ ciudadActual.sky }} </small></p>
        </div>
      </div>
      <div v-else>
        <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p>
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

<style lang="scss">
$tamaño-icono: 4em;
.icono{
  width: $tamaño-icono;
}

</style>
