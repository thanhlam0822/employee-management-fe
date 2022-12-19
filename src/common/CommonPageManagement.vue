<template>
  <div class="common-layout">
    <el-container>
      <el-header><slot name="header"></slot></el-header>
      <el-container>
        <el-aside width="300px"><slot name="menu"></slot></el-aside>
        <el-container>
          <el-main>
            <div class="list">
              <slot name="filter"></slot>
              <slot name="list"></slot>
              

            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {defineEmits} from "vue";
defineEmits(['test'])
</script>

<style scoped>
.list {
  width: 1090px;
  margin-top: 20px;
  padding: 10px 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #F6F7FC;
  border-radius: 10px;
}

</style>