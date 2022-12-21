<template>
  <el-button size="default" color="#15074E" @click="$emit('to-edit-page')">Edit</el-button>
  <el-button size="default" color="#FFA500" >Delete</el-button>
</template>

<script lang="ts" setup>
import {defineEmits} from "vue";
defineEmits(["to-edit-page"])
</script>

<style scoped>

</style>