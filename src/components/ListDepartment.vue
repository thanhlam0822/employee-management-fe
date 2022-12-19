<template>
  <div class="action">
    <div class="filter-name"><p>Name</p></div>
    <div class="filter-input">

      <el-col :span="15"  >
        <el-input
            v-model="query"
            :prefix-icon="Search"
        />
      </el-col>
    </div>
    <div class="add-department">

      <add-department></add-department>
    </div>
  </div>
  <el-table class="el-table " :data="fakeData"  style="width: 100%">
    <el-table-column class="cell" prop="id" label="User Id"  />
    <el-table-column prop="name" label="id" />
    <el-table-column prop="username" label="title" />
    <el-table-column prop="email" label="body" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>

 <common-list></common-list>
</template>

<script lang="ts" setup>
import CommonList from "@/common/CommonList.vue"
import AddDepartment from "@/components/AddDepartment.vue"
import {ref} from "vue"
import {Search } from '@element-plus/icons-vue'
const query = ref('')
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
.filter-input {
  margin-left: 5px;

}
.add-department {
  position: absolute;
  right: 100px;
  font-size: 4vh;

}
.add-department:hover {
  font-size: 5vh;
}
</style>