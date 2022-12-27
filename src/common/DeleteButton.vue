<template>
<el-button type="danger" @click="openWarning" >Delete</el-button>
</template>

<script lang="ts" setup>
import {defineEmits} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
let emits = defineEmits(['delete-data'])
const openWarning = () => {
  ElMessageBox.confirm(
      'proxy will permanently delete the file. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        emits('delete-data')
        ElMessage({
          type: 'success',
          message: 'Delete completed',
        })
      })
      .catch(() => {

        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
}
</script>

<style scoped>

</style>