<template>
  <div class="action">
    <filter-department v-model:name="name"  @filter-by-name="filterByName(name)"> </filter-department>

  </div>
  <el-table class="el-table " :data="departmentList"  style="width: 100%">
    <el-table-column class="cell" prop="id" label="ID"  />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="responsibility" label="Responsibility" />
    <el-table-column prop="establishDate" label=" Establish Date" />
    <el-table-column  label="Operations">
      <template #default="scope">
        <edit-department :id="scope.row.id" v-model:name="scope.row.name"> </edit-department>

      </template>

    </el-table-column>
  </el-table>
  <common-filter-and-paginate>
    <template #input>
      <el-input v-model="pageSize" @keyup.enter="pageSizeChange(pageSize)"></el-input>
    </template>
    <template #paginate>
      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="100" />
    </template>
  </common-filter-and-paginate>

</template>

<script lang="ts" setup>
import CommonFilterAndPaginate from "@/common/FilterAndPaginate.vue"
import EditDepartment from "@/components/EditDepartment.vue"
import FilterDepartment from "@/components/FilterDepartment.vue"
import {ref, watch} from "vue"
let pageSize=ref(5)
let name=ref('')
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
let router = useRouter();


let departmentList = ref([
  {
    "id": null,
    "name" : null,
    "responsibility" :null,
    "establishDate" : null
  }
])

axios.get("http://localhost:8081/api/department/search?name=").then(
    response => {
      departmentList.value = response.data
    })
const handleCurrentChange = (index:number) => {
  axios.get(`http://localhost:8081/api/department/search?name=${name.value}&&pageNumber=${index-1}&&pageSize=${pageSize.value}`).then(
      response => {

        departmentList.value = response.data
      })

}
const pageSizeChange = (size:number) => {
  axios.get(`http://localhost:8081/api/department/search?name=${name.value}&&pageSize=${size}`).then(
      response => {

        departmentList.value = response.data
      })
}
const filterByName = (name:string) => {

  axios.get(`http://localhost:8081/api/department/search?name=${name}&&pageSize=${pageSize.value}`).then(
      response => {
        departmentList.value = response.data
      })
}





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