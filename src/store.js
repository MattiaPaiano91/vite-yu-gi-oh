import { reactive } from "vue";

export const yugiCards = reactive({
  baseUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cards: [],
  searchUrl:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?&archetype=",
});
 


