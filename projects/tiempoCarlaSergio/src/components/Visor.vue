<template>
  <div v-if="ciudad" >
    <div>
        <!-- Nombre Ciudad-->
        <p> {{ ciudad.nombre }}</p>
        <!-- Temperatura-->
        <h1 class="display-1">{{ parseInt(ciudad.temp) }}º</h1>
        <!-- Cielo (Soleado, Nublado, etc.)-->
        <img :src="`http://openweathermap.org/img/wn/${ ciudad.icon }.png`" alt="Estado" class="icono mb-1">
        <!--<img :src="require(`@/assets/${ciudad.estado}.png`)" alt="Estado" class="icono mb-1">-->
        <p><small> {{ (ciudad.estado).toUpperCase() }} </small></p> 
     </div>
  </div>
  <div v-else>
     <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p> 
  </div>
</template>

<script>
export default {
    props: {
        ciudad: Object
    }
}
</script>

<style>

</style>