<template>
<div>

</div>
</template>

<script>

   // import {API_KEY, URL} from '../../service/const'


    export default {
        name: "Humidityweather",
        props: ["query"],
        created: function(){
            // eslint-disable-next-line no-console
         //console.log(this.query)
        },
        data() {
            return {

                tableVariant: 'info',

            }
        },
        computed: {
            /*getPr () {
                return this.query;
            }*/
        },
        mounted () {
           // const queryValue = this.query;
            // eslint-disable-next-line no-console
            //console.log(queryValue);

        },
        methods: {
         /*   getHumity: function () {

                const promise = this.$http.get(URL + this.query+ '&?units=metric&APPID=' + API_KEY);
                return promise.then(response => {
                    this.temp = response.data.main.temp ;
                    this.tempMin = response.data.main.temp_min;
                    this.tempMax = response.data.main.temp_max;
                    this.humidity = response.data.main.humidity;
                    const items = response.items;
                    // eslint-disable-next-line no-console
                    console.log(this.humidity, this.temp);
                    // Must return an array of items or an empty array if an error occurred
                    return items || []

                }).catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(Object.keys(error), error.message);
                })
            }*/
        }
    }
</script>

<style scoped>

</style>