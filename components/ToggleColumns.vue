<template>
  <div class="toggle_columns">
    <span class="toggle_btn" @click="switchСolumn('row')">
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{active: column === 'row'}"
      >
        <rect width="23" height="10" fill="" />
        <rect y="13" width="23" height="10" fill="" />
      </svg>
    </span>
    <span class="toggle_btn" @click="switchСolumn('col')">
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{active: column === 'col'}"
      >
        <rect width="10" height="10" fill="" />
        <rect y="13" width="10" height="10" fill="" />
        <rect x="13" width="10" height="10" fill="" />
        <rect x="13" y="13" width="10" height="10" fill="" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {

  methods:{
    switchСolumn(value){
      this.$store.commit('switchСolumn', value)
    }
  },

  computed:{
    column(){
      return this.$store.state.valueColumn
    }
  }
};
</script>

<style lang="scss">
.toggle_columns {
  text-align: center;
  .toggle_btn {
    margin: 0 10px;
    cursor: pointer;
    svg{
      fill: #BDBDBD;
    }
  }
}
.active{
    fill: black !important;
}
</style>
