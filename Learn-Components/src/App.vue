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
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Servers from "./Servers.vue";
import ServerDetails from "./ServerDetails.vue";

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
