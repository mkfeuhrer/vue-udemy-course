<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Username: {{ switchName() }}</p>
    <p>Userage: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    userAge: Number
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "mkfeuhrer";
      //   eventBus.$emit("nameWasReset", this.name);
    }
  },
  created() {
    eventBus.$on("nameWasReset", name => {
      this.name = name;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
