<template>
  <div class="fit-nav">
          <fit-nav-button @click="$router.push('/')"> logo</fit-nav-button>
          <div class="fit-nav-menu">
            <fit-nav-button @click="$router.push('/')"> fit list</fit-nav-button>
            <fit-nav-button @click="$router.push('/weight')"> weight</fit-nav-button>
            <fit-nav-button @click="$router.push('/about')"> about</fit-nav-button>
          </div>
        
  </div>
</template>

<script>
export default {
    name: "fit-navbar"
}
</script>

<style scoped>
.fit-nav {
  min-height: 50px;
  background-color: aquamarine;
  border: 1px solid greenyellow;
  display: flex;
  align-items: center 
}

.fit-nav-menu {
  align-self: stretch;
  display: flex;
  margin-left: auto;
}
</style>