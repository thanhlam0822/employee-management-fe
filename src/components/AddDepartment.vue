<template>
  <el-icon @click="dialogVisible = true"><Plus /></el-icon>
  <el-dialog
      v-model="dialogVisible"
      title="ADD DEPARTMENT FORM"
      width="30%"
      :before-close="handleClose"
  >
    <span>This is a message</span>
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
import { ref } from 'vue'
const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
}
</script>
<style scoped>

</style>