
<template>
  <el-icon @click="dialogVisible = true"><Plus /></el-icon>
  <el-dialog
      v-model="dialogVisible"
      title="ADD EMPLOYEE FORM"
      width="30%"

  >
    <div class="form-add">
      <span>Name:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="employeeDetail.name" placeholder="Name Employee" />
        </el-col>
      </div>
      <span>Department:</span>
      <div class="input">
        <el-col :span="20">
          <el-select v-model="department" filterable  placeholder="Select Department" >
            <el-option
                v-for="department in  departmentList"
                :key="department"
                :label="department.name"
                :value="department.name"
                @click="getDepartmentId(department.id)"
            />
          </el-select>
        </el-col>
      </div>
      <span>Role:</span>
      <div class="input">
        <el-col :span="20">
          <el-select v-model="employeeDetail.role"  placeholder="Select Role" >
            <el-option
                v-for="role in roleList"
                :key="role"
                :label="role.label"
                :value="role.value"
            />
          </el-select>
        </el-col>
      </div>
      <span>Status:</span>
      <div class="input">
        <el-col :span="20">
          <el-select v-model="employeeDetail.status"  placeholder="Select Role" >
            <el-option
                v-for="status in statusList"
                :key="status"
                :label="status.label"
                :value="status.value"
            />
          </el-select>
        </el-col>
      </div>
      <span>Phone:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="employeeDetail.phone" placeholder="Phone" />
        </el-col>
      </div>
      <span>Email:</span>
      <div class="input">
        <el-col :span="20">
          <el-input v-model="employeeDetail.email" placeholder="Email" />
        </el-col>
      </div>

      <span>Birthday:</span>
      <div class="input">
        <el-col :span="20">
          <el-date-picker
              v-model="employeeDetail.birthDay"
              type="date"
              placeholder="Pick a day"
              :size="size"
          />
        </el-col>
      </div>

    </div>


    <template #footer>
      <span class="dialog-footer">

        <add-button @add-data="addEmployee"></add-button>
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
import axios from "axios"
import {defineEmits, defineProps, reactive} from "vue";
import { ref } from 'vue'
import AddButton from  '@/common/AddButton.vue'

let emits = defineEmits(['reload','addData'])

const dialogVisible = ref(false)
let  departmentId = ref(0)
let department = ref('')
let employeeDetail  = ref({
  id: null,
  name: "",
  phone: "",
  email: "",
  role: "",
  status: '',
  birthDay: "",
  department: null
})
let departmentList = ref({
  id: null
})
let roleList = ref([
    {
      value: "Management",
      label: "Management"
    },
    {
      value: "Employee",
      label: "Employee"
    },
    {
      value: "Intern",
      label: "Intern"
    },
])
let statusList = ref([
  {
    value: "Full-time",
    label: "Full-time"
  },
  {
    value: "Part-time",
    label: "Part-time"
  },
  {
    value: "Quit",
    label: "Quit"
  },
])
let getDepartmentId = (id:number) => {
  departmentId.value = id
  console.log(departmentId)

}
let addEmployee = async () => {
  await axios.post(`http://localhost:8081/api/department/${departmentId.value}/employee`,employeeDetail)
  dialogVisible.value = false
  emits('reload')
}

axios.get("http://localhost:8081/api/department").then(response => {
  departmentList.value = response.data

})


</script>
<style scoped>
.form-add {

  align-items: center;
}
.input {
  margin: 10px;
}
</style>