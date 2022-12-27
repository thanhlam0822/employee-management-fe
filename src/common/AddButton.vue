<template>
  <el-button type="primary" @click="openWarning">Submit Form</el-button>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import {defineEmits} from "vue";
let emits = defineEmits(['add-data'])
const openWarning = () => {
  ElMessageBox.confirm(
      'Please check data carefully to avoid mistake  before submit ',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        emits("add-data")
        ElMessage({
          type: 'success',
          message: 'Add completed',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Add canceled',
        })
      })
}
</script>