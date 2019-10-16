<template>
  <div v-if="ciudad" >
    <div>
        <!-- Nombre Ciudad-->
        <p> {{ ciudad.name }}</p>
        <!-- Temperatura-->
        <h1 class="display-1">{{ ciudad.temperature }}</h1>
        <!-- Cielo (Soleado, Nublado, etc.)-->
        <img :src="require(`@/assets/${ciudad.sky}.png`)" alt="Estado" class="icono mb-1">
        <p><small> {{ ciudad.sky }} </small></p> 
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