<template>
  <el-table :data="fakeData" style="width: 100%">
    <el-table-column prop="id" label="userId"  > </el-table-column>
    <el-table-column prop="name" label="id" ></el-table-column>
    <el-table-column prop="username" label="title" ></el-table-column>
    <el-table-column prop="email" label="body" ></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import axios from "axios";

let fakeData = ref([
  {
    "id": null,
    "name" : null,
    "username" :null,
    "email" : null
  }
])

axios.get("https://jsonplaceholder.typicode.com/users").then(
    response => {
      fakeData.value.shift()
      for ( let i=0 ; i < response.data.length;i++ ) {
        fakeData.value.push(response.data[i])
      }
    })

</script>

<style scoped>

</style>