<template>
  <div id="details" class="text-center">
    <buscador @change="cargaCiudad"></buscador>
    <div v-if="iniciado" >
      <visor :ciudad="ciudadActual"></visor>
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
