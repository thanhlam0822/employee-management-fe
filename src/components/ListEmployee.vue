<template>
  <div class="action">
    <filter-employee> </filter-employee>
    <div class="add-employee">
      <add-employee></add-employee>
    </div>
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
import CommonFilterAndPaginate from "@/common/CommonFilterAndPaginate.vue"
import FilterEmployee from "@/components/FilterEmployee.vue"
import AddEmployee from  "@/components/AddEmployee.vue"
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
.action {
  background-color: #989BE5;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;


}
.add-employee {
  position: absolute;
  right: 100px;
  font-size: 4vh;

}
.add-employee:hover {
  font-size: 5vh;
}
</style>