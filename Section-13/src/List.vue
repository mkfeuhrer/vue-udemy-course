<template>
  <div>
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitmixin } from "./fruitmixin.js";
export default {
  mixins: [fruitmixin]
};
</script>

<style  scoped>
</style>