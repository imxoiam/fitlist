<template>
  <div class="fit-nav">
          <fit-nav-button @click="$router.push('/')"> logo</fit-nav-button>
          <fit-nav-button @click="$router.push('/')"> fit list</fit-nav-button>
          <fit-nav-button @click="$router.push('/weight')"> weight</fit-nav-button>
          <fit-nav-button @click="$router.push('/about')"> about</fit-nav-button>
        
  </div>
</template>

<script>
export default {
    name: "fit-navbar"
}
</script>

<style scoped>
.fit-nav {
  height: 50px;
  background-color: aquamarine;
  border: 1px solid greenyellow;
  display: flex;
  align-items: center 
}
</style>