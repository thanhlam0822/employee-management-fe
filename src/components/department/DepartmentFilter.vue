<template>
  <div class="filter-name"><p>Name</p></div>
  <div class="filter-input">
    <input class="input"
            @keyup.enter="$emit('filter-by-name')"
            :value="name"
            @change="(event) => $emit('update:name', event.target.value)"

    />
  </div>

</template>

<script lang="ts" setup>

import {defineEmits,defineProps} from "vue";

defineProps(['name'])
defineEmits(['filter-by-name'])

</script>

<style scoped>
.filter-input {
  margin-left: 5px;
  width: 180vh;

}
input.input {
  width: 10vh;
  padding: 1vh;
  border-radius: 10px;
}
.add-department {

  font-size: 4vh;

}
.add-department:hover {
  font-size: 5vh;
}
</style>