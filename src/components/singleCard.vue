<script>


export default {
    data() {
        return {
            
        };
    },
    methods: {
    },
    props:{
        yugiCards:Object
    }
}
</script>

<template>
      <div class="image-container">
          <img :src="yugiCards.card_images[0].image_url" alt="">
          <div class="card-name">
            {{ yugiCards.name }}
            <div class="card-type">
              {{ yugiCards.archetype }}
            </div>
          </div>
      </div>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/partials/variables.scss" as *;

    .image-container{
    width: calc((100% / 5) - 10px);
    height: 300px;
    margin: 10px 5px 120px;
    img{
      width: 100%;
      height: 100%;
    }
    .card-name{
      background-color: $yugi-color;
      height: 100px;
      text-transform: uppercase;
      color: white;
      text-align: center;
      .card-type{
        color: black;
        text-align: center;
      }
    }
  }

</style>
    
    