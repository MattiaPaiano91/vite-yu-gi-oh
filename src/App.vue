<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { yugiCards } from './store.js';

export default {
    data() {
        return {
            yugiCards,
            loadingElement: false
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        showPage(){
            this.loadingElement = true
        },
        ritardaPagina() {
        setTimeout(() => {
            this.showPage();
        }, 200);}
    },
     created() {
          axios
            .get(this.yugiCards.baseUrl)
            .then((response) => {
                console.log(response);
                this.yugiCards.cards = response.data.data;
                console.log('cards' , this.yugiCards);
                this.ritardaPagina();
            })
        
    },
            
    
}
</script>

<template>
    <div class="container-fluid">
        <div v-if="loadingElement == false" class="preLoading-container">
            <img src="/img/640px-Yu-Gi-Oh!_(Logo).jpg" alt="">
            <p>Caricamento in corso...</p>
        </div>
        <div v-else>
            <AppHeader />
            <AppMain />
        </div>
    </div>

</template>
  


<style lang="scss">
    @use "assets/scss/main" as *;
    @use "assets/scss/partials/variables.scss" as *;
    @import "assets/scss/partials/reset";
    .preLoading-container{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        img{
            margin: 0 auto;
        }
    }
    
</style>

