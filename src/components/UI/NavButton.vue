<template>
  <button class="fit-nav-button">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: "fit-nav-button"
}
</script>

<style scoped>
.fit-nav-button {
  height: auto;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  //padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 15px;
}
</style>