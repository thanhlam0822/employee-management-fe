<template>
  <el-icon @click="dialogVisible = true"><Plus /></el-icon>
  <el-dialog
      v-model="dialogVisible"
      title="ADD EMPLOYEE FORM"
      width="30%"
      :before-close="handleClose"
  >
    <div class="form-add">
      <span>Name:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="input" placeholder="Name Department" />
        </el-col>
      </div>
      <span>Phone:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="input" placeholder="Phone" />
        </el-col>
      </div>
      <span>Email:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="input" placeholder="Email" />
        </el-col>
      </div>
      <span>Role:</span>
      <div class="input">
        <el-col :span="20">
          <el-select v-model="value"  placeholder="Select Role" >
            <el-option
                v-for="role in roles"
                :key="role.value"
                :label="role.label"
                :value="role.value"
            />
          </el-select>
        </el-col>
      </div>
      <span>Birthday:</span>
      <div class="input">
        <el-col :span="20">
          <el-date-picker
              v-model="value1"
              type="date"
              placeholder="Pick a day"
              :size="size"
          />
        </el-col>
      </div>
      <span>Department:</span>
      <div class="input">
        <el-col :span="20">
          <el-select v-model="value"  placeholder="Select Role" >
            <el-option
                v-for="department in departments"
                :key="department"
                :label="department.username"
                :value="department.username"
            />
          </el-select>
        </el-col>
      </div>
    </div>


    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import axios from "axios"
import { ref } from 'vue'

const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
}
const value = ref('')
const value1 = ref('')
const roles = [
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'Leader',
    label: 'Leader',
  },
  {
    value: 'Intern',
    label: 'Intern',
  },
  {
    value: 'Employee',
    label: 'Employee',
  },
]
const departments = ref([])
axios.get("https://jsonplaceholder.typicode.com/users").then(
    response => {
      departments.value = response.data
    }
)
</script>
<style scoped>
.form-add {

  align-items: center;
}
.input {
  margin: 10px;
}
</style>