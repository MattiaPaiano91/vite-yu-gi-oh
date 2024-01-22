<script>
import { yugiCards } from '../store';
import singleCard from './singleCard.vue';
export default {
    data() {
        return {
            yugiCards
        };
    },
    methods: {
    },
    components:{
        singleCard
    }
}
</script>

<template>

<main>
      <form>
        <select name="" id="" value="Alien">
            <option value="Alien">Alien</option>
        </select>
       </form>
    <div class="container">
        <singleCard
        v-for="(elem,i) in yugiCards.cards"
        :yugiCards="elem" 
        />
    </div>
        
</main>
    
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
main{
    width: 100%;
    background-color: $yugi-color;
    padding-top: 100px;
    form{
        margin: 0px 0px 20px 600px;
        select{
            width: 100px;
        }
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        width: 1200px;
        margin:0 auto;
        background-color: white;
    }
}
</style>
    
       

    
