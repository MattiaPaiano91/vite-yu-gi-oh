<script>
import { yugiCards } from "../store";
import singleCard from "./singleCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      yugiCards,
      archetype: [],
      archOptions: "",
      prova: "",
    };
  },
  methods: {},
  components: {
    singleCard,
  },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php?")
      .then((response) => {
        console.log("endpoint", response);
        this.archetype = response.data;
      });
  },
  methods: {
    getDataFromApi() {
      let queryString = this.yugiCards.searchUrl;
      let finalUrl = queryString + this.archOptions;

      console.log("final url", finalUrl);

      if (this.archOptions.length > 0) {
        axios.get(finalUrl).then((response) => {
          this.yugiCards.cards = response.data.data;
        });
      }
    },
  },
};
</script>

<template>
  <main>
    <form @submit.prevent="getDataFromApi()">
      <select v-model="archOptions" name="" id="">
        <option
          v-for="(elem, i) in this.archetype"
          :value="elem.archetype_name"
        >
          {{ elem.archetype_name }}
        </option>
      </select>
      <button>genera</button>
    </form>
    <div class="container">
      <singleCard v-for="(elem, i) in yugiCards.cards" :yugiCards="elem" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
main {
  width: 100%;
  background-color: $yugi-color;
  padding-top: 100px;
  form {
    margin: 0px 0px 20px 600px;
    select {
      width: 100px;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    background-color: white;
  }
}
</style>
