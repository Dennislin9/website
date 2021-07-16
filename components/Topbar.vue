<template>
  <div class="topbar logo" @click="home">
    
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
  },

};
</script>

<style lang="scss" scoped>
  .logo{
    background-size:contain;
    height: 100px;
    width: 100%;
  
  }

.row {
  height: 150px;
}
</style>