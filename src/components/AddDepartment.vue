<template>
  <el-icon @click="dialogVisible = true"><Plus /></el-icon>
  <el-dialog
      v-model="dialogVisible"
      title="ADD DEPARTMENT FORM"
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
      <span>Responbility</span>
      <div class="input">
        <el-col :span="20">
          <el-input
              v-model="textarea"

              type="textarea"
              placeholder="Please input"
          />
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
import { ref } from 'vue'
const dialogVisible = ref(false)
const handleClose = () => {
  dialogVisible.value = false
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