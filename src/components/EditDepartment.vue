<template>
<div class="hide-div">{{departmentDetail}}</div>
  <el-button type="warning"  @click="turnOnModal(id)">
    Edit
  </el-button>

  <el-dialog
      v-model="dialogVisible"
      title="Edit department form "
      width="30%"
     :append-to-body="true"
      :before-close="cancel"

  >
    <form class="form-add"  @submit.prevent="editDepartment"  >


        <span>ID:</span>
        <div class="input">
          <el-col :span="20">
            <el-input disabled v-model="departmentDetail.id"  placeholder="ID" />
          </el-col>
        </div>
        <span>Name:</span>
        <div class="input">
          <el-col :span="20">
            <input class="edit-input" :value="name" @change="(event) => $emit('update:name', event.target.value)" placeholder="Name Department" />
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


    </form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button  size="default" type="primary" @click="editDepartment(id)"  >Confirm</el-button>

      </span>
    </template>
  </el-dialog>



</template>
<script lang="ts" setup>
import axios from "axios";


let dialogVisible = ref(false)

import { ref,defineProps,defineEmits } from 'vue'
import {useRoute} from "vue-router";
import router from "@/router";
let props = defineProps(['id','name'])
defineEmits(['edit-department','update:name'])
let route = useRoute();
let idDepartment = ref(null)
let departmentDetail = ref()

let turnOnModal = (id:any) => {
  dialogVisible.value = true
  idDepartment.value = id
  departmentDetail.value = []
  axios.get(`http://localhost:8081/api/department/${idDepartment.value}`).then(response => {
    departmentDetail.value = response.data
  })
  router.push(`/departments/${id}`)

}
let editDepartment = (id:any) => {
  dialogVisible.value = false
  idDepartment.value = id
  axios.put(`http://localhost:8081/api/department/${idDepartment.value}`,{
    name:props.name,
    responsibility: departmentDetail.value.responsibility,
    establishDate: departmentDetail.value.establishDate
  })


  }
let cancel = () => {

  dialogVisible.value = false
  router.push("/departments")

}



</script>
<style scoped>
.form-add {

  align-items: center;
}
.input {
  margin: 10px;
}
.hide-div {
  display: none;
}
.edit-input{
  width: 100%;
  border: 1px solid #dcdfe6;

  border-radius: 4px;
  height: 6vh;
}
</style>