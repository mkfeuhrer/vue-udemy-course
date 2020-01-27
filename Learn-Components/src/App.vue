<template>
  <div class="container">
    <Header></Header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Servers from "./components/Servers.vue";
import ServerDetails from "./components/ServerDetails.vue";

export default {
  components: {
    "app-header": Header,
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
