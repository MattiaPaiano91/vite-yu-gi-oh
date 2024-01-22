<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { yugiCards } from './store.js';

export default {
    data() {
        return {
            yugiCards
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
     created() {
        axios
            .get(this.yugiCards.baseUrl)
            .then((response) => {
                console.log(response);
                this.yugiCards.cards = response.data.data;
                console.log('cards' , this.yugiCards);
            });
    }
}
</script>

<template>

    <AppHeader />
    <AppMain
    />

</template>

<style lang="scss">
    @use "assets/scss/main" as *;
    @use "assets/scss/partials/variables.scss" as *;
    @import "assets/scss/partials/reset";
</style>

