<template>
  <div class="filter-name"><p>Name</p></div>
  <div class="filter-input">
    <input class="input"
            @keyup.enter="$emit('test1')"
            :value="query"
            @change="(event) => $emit('update:query', event.target.value)"

    />
  </div>
</template>

<script lang="ts" setup>
import {defineEmits,defineProps} from "vue";

defineProps(['query'])
defineEmits(['test1'])

</script>

<style scoped>
.filter-input {
  margin-left: 5px;

}
input.input {
  width: 10vh;
  padding: 1vh;
  border-radius: 10px;
}
</style>