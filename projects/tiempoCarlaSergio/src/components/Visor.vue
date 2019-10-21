<template>
  <div v-if="ciudad" >
    <div>
        <!-- Nombre Ciudad-->
        <p> {{ ciudad.nombre }}</p>
        <!-- Temperatura-->
        <h1 class="display-1">{{ tempEntero }}º</h1>
        <!-- Cielo (Soleado, Nublado, etc.)-->
        <img :src="`http://openweathermap.org/img/wn/${ ciudad.icon }.png`" alt="Estado" class="icono mb-1">
        <!--<img :src="require(`@/assets/${ciudad.estado}.png`)" alt="Estado" class="icono mb-1">-->
        <p><small> {{ ciudad.estado | capitalize}} </small></p> 
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
    },
    // Computed properties
    computed: {
      // La variable tempEntero devuelve la temperatura de la ciudad sin decimales
      tempEntero: function() {
        return parseInt(this.ciudad.temp);
      }
    },
    // Filtro para poner en mayusculas un string
    filters: {
      capitalize: function(value) {
         return value.toUpperCase();
      }
    }
}
</script>

<style>

</style>