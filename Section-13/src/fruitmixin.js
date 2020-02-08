export const fruitmixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created() {}
};
