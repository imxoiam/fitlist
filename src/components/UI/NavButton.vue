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
  align-self: stretch;
  width: 100px;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 15px;
}
</style>