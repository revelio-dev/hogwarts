<template>
    <div class="error">
        <div class="container">
            <div class="center">
                <h1>ERROR 404</h1>
            <b-img id="image-error" src="https://i.imgflip.com/1060im.jpg" width="500" height="100"></b-img>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Errorpage",

    }
</script>

<style scoped>
    .container {
        position: relative;
    }

.center{
    margin-top: 2%;
}
h1{
    text-align: center;
    margin-bottom: 15px;
    font-family: "Sucrose Bold Two", serif;
    font-size-adjust: inherit;
    font-size: 50px;
}
    img {
        width: 100%;
        height: auto;
    }
</style>