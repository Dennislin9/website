<template>
  <nav>
    <div class="container desktop">
      <ul>
        <NuxtLink
          tag="li"
          v-for="(list, index) in list"
          :key="index"
          :name="list.naam"
          :link="list.link"
          v-bind:to="`/${list.link}`"
          >{{ list.naam }}</NuxtLink
        >
      </ul>
    </div>
    <div class="mobile">
      <ul>
        <NuxtLink
          tag="li"
          v-for="(list, index) in list"
          :key="index"
          :name="list.naam"
          :link="list.link"
          v-bind:to="`/${list.link}`"
          >{{ list.naam }}</NuxtLink
        >
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  computed: {
    list() {
      return this.$store.state.items;
    },
  },
};
</script>

<style lang="scss"scoped>
nav {
  background: purple;
  height: 100px;
  width: 100vw;
  .container {
    height: 100%;

    ul {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      display: flex;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &.nuxt-link-exact-active {
          border: 5px solid black;
          background: red;
          height: 100%;
        }
      }
    }
  }
}
@media screen and(max-width: 800px){
    body{
        background: blue;
    }
    
}
</style>