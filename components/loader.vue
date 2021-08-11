<template>
  <div class="loader">
    <img src="@/assets/icons/loader_icon.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  width: 100%;
  position: fixed;
  bottom: 1rem;
  left: 0;
  text-align: center;
  img {
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}

@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
</style>
