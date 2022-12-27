<template>
  <div class="action">
    <filter-employee> </filter-employee>
    <div class="add-employee">
      <employee-add @reload="callApiAgain"  >
      </employee-add>

    </div>

  </div>
  <el-table :data="employeeList" style="width: 100%">
    <el-table-column prop="id" label="ID" ></el-table-column>
    <el-table-column prop="name" label="Name" ></el-table-column>
    <el-table-column prop="role" label="Role" ></el-table-column>
    <el-table-column label="Department" >
      <template #default="scope">
        <div>{{scope.row.department.name}}</div>

      </template>
    </el-table-column>
    <el-table-column prop="status" label="Status" ></el-table-column>
    <el-table-column prop="email" label="Email" ></el-table-column>
    <el-table-column prop="phone" label="Phone" ></el-table-column>
    <el-table-column  label="Operations" >

    </el-table-column>
  </el-table>
  <common-filter-and-paginate>
    <template #input>
      <el-input v-model="query" @keyup.enter="handleInput(query)"></el-input>
    </template>
    <template #paginate>
      <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="100" />
    </template>
  </common-filter-and-paginate>
  <router-view/>
</template>

<script lang="ts" setup>
import CommonFilterAndPaginate from "@/components/FilterAndPaginate.vue"
import FilterEmployee from "@/components/employee/EmployeeFilter.vue"
import EmployeeAdd from "@/components/employee/EmployeeAdd.vue"
import EmployeeEdit from "@/components/employee/EmployeeEdit.vue"
import {ref, watch,watchEffect,defineProps} from "vue"
import axios from "axios";
import {useRouter} from "vue-router";


let departmentList = ref({

})
let router = useRouter();
let employeeList = ref([
  {
    id: null,
    name: "",
    phone: "",
    email: "",
    role: "",
    status: '',
    birthDay: "",
    department: {
      id: null,
      name: "",
      responsibility: "",
      establishDate: ""
    }
  }
])

axios.get("http://localhost:8081/api/employee").then(response => {
  employeeList.value = response.data

})
let callApiAgain = () => {
  axios.get("http://localhost:8081/api/employee").then(response => {
    employeeList.value = response.data

  })
}
let toEditPage = (id:number) => {
  router.push(`/employees/${id}`)
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
.add-employee {
  position: absolute;
  right: 100px;
  font-size: 4vh;

}
.add-employee:hover {
  font-size: 5vh;
}


</style>