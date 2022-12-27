<template>
  <div class="common-layout">
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-container>
        <el-aside width="300px"><common-menu></common-menu></el-aside>
        <el-container>
          <el-main>
            <div class="list">
              <slot name="filter"></slot>
              <router-view> </router-view>

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
import CommonHeader from "@/layout/modules/Header.vue"
import CommonMenu from "@/layout/modules/Menu.vue"
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