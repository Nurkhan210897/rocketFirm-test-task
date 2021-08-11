<template>
  <div class="header">
    <div class="container">
      <layout-nav />
      <search/>
    </div>
  </div>
</template>

<script>
import Search from '../Search.vue';
import Nav from "./Nav.vue";
export default {
  components: { Nav, Search }
};
</script>

<style lang="scss">
.header {
  background-color: #000;
  padding: 90px 0;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1340px;
  }
}
</style>
