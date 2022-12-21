<template>
  <el-icon @click="dialogVisible = true"><Plus /></el-icon>
  <el-dialog
      v-model="dialogVisible"
      title="ADD DEPARTMENT FORM"
      width="30%"
      :before-close="handleClose"
  >
    <form class="form-add" @submit.prevent="addDepartment">

      <span>Name:</span>
     <div class="input">
       <el-col :span="20">
         <el-input v-model="name" placeholder="Name Department" />
       </el-col>
     </div>
      <span>Responbility</span>
      <div class="input">
        <el-col :span="20">
          <el-input
              v-model="responsibility"

              type="textarea"
              placeholder="Please input"
          />
        </el-col>
      </div>
      <span>Establish Date:</span>
      <div class="input">
        <el-col :span="20">
          <el-date-picker
              v-model="establishDate"
              type="date"
              placeholder="Pick a day"
              size="default"
          />
        </el-col>
      </div>
    </form>



    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addDepartment">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from 'vue'
const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
}
let name = ref('')
let responsibility = ref('')
let establishDate = ref('')
let addDepartment = () => {
  axios.post("http://localhost:8081/api/department/",{
    name: name.value,
    responsibility: responsibility.value,
    establishDate: establishDate.value

  })
       name.value = '',
       responsibility.value = '',
       establishDate.value = ''
}
</script>
<style scoped>
.form-add {

  align-items: center;
}
.input {
  margin: 10px;
}
</style>