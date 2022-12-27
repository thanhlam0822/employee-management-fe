<template>
  <div class="action">
    <filter-project></filter-project>
  </div>
  <el-table :data="fakeData" style="width: 100%">
    <el-table-column prop="id" label="userId"  > </el-table-column>
    <el-table-column prop="name" label="id" ></el-table-column>
    <el-table-column prop="username" label="title" ></el-table-column>
    <el-table-column prop="email" label="body" ></el-table-column>
  </el-table>
  <common-filter-and-paginate>
    <template #input>
      <el-input v-model="query" @keyup.enter="handleInput(query)"></el-input>
    </template>
    <template #paginate>
      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="100" />
    </template>
  </common-filter-and-paginate>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import axios from "axios";
import CommonFilterAndPaginate from "@/components/FilterAndPaginate.vue"
import FilterProject from "@/components/FilterProject.vue"
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
.action {
  background-color: #989BE5;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;


}
</style>