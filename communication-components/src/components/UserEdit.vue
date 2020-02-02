<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Current age is {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
export default {
  props: {
    userAge: Number
  },
  methods: {
    editAge() {
      this.userAge = 20;
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
