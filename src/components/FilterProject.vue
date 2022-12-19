<template>
  <div class="filter-name"><p>Name</p></div>
  <div class="filter-input">
    <input class="input"/>
  </div>
  <div class="filter-name"><p>Status</p></div>
  <div class="filter-input">
    <input class="input"/>
  </div>
</template>

<script>
export default {
  name: "FilterProject"
}
</script>

<style scoped>
.filter-input {
  margin-left: 5px;

}
.filter-name {
  margin-left: 10px;
}
input.input {
  width: 10vh;
  padding: 1vh;
  border-radius: 10px;
}
</style>