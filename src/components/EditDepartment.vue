<template>
  <div>{{departmentDetail}}</div>
        <form class="form-add"  @submit.prevent="editDepartment" >

            <span>ID:</span>
            <div class="input">
              <el-col :span="20">
                <el-input v-model="departmentDetail.id"  placeholder="ID" />
              </el-col>
            </div>
            <span>Name:</span>
            <div class="input">
              <el-col :span="20">
                <el-input v-model="departmentDetail.name" placeholder="Name Department" />
              </el-col>
            </div>
            <span>Responbility</span>
            <div class="input">
              <el-col :span="20">
                <el-input
                    v-model="departmentDetail.responsibility"

                    type="textarea"
                    placeholder="Please input"
                />
              </el-col>
            </div>
            <span>Establish Date:</span>
            <div class="input">
              <el-col :span="20">
                <el-date-picker
                    v-model="departmentDetail.establishDate"
                    type="date"
                    placeholder="Pick a day"
                    size="default"
                />
              </el-col>
            </div>

            <el-button  size="default" type="primary" @click="editDepartment" >Confirm</el-button>



        </form>

</template>
<script lang="ts" setup>
import axios from "axios";

import { ref } from 'vue'
import {useRoute} from "vue-router";
let route = useRoute();
let id = route.params.id

let departmentDetail = ref()

axios.get(`http://localhost:8081/api/department/${id}`).then(response => {
  departmentDetail.value = response.data


})
let editDepartment = () => {
  axios.put(`http://localhost:8081/api/department/${id}`,{
    name: departmentDetail.value.name,
    responsibility: departmentDetail.value.responsibility,
    establishDate: departmentDetail.value.establishDate
  })
  }



</script>
<style scoped>
.form-add {

  align-items: center;
}
.input {
  margin: 10px;
}
.primary-button {
  float:right;
}
.detail-hide {
  display: none;
}

</style>