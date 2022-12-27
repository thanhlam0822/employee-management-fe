<template>

  <div class="common-header">
    <el-container>
      <el-header> <div class="common-header-title">Management Website</div> </el-header>
    </el-container>
  </div>


</template>

<script lang="ts" setup>

</script>

<style scoped>
.common-header {
  background-color: #9AABE4;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;


}
header.el-header {
  position: relative;
}
.common-header-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-transform: uppercase;
  color: #ffffff;
}
</style>