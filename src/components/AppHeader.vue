<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {

    }
}
</script>

<template>
    <header class="d-flex">

       <div class="logo-container">
            <img src="/img/640px-Yu-Gi-Oh!_(Logo).jpg" alt="">
       </div>
       <h1>Yu-Gi-Ho Api</h1>
       
     
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
@use "../assets/scss/main.scss" as *;

header{
    height: 50px;
    position: relative;
    .logo-container{
        width: 100px;
        height: 30px;
        margin: 0px 20px;
        line-height: 50px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
        
