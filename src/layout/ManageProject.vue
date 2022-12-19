<template>
  <CommonPageManagement>
    <template #header>
      <common-header> Project Management</common-header>
    </template>
    <template #menu>
      <common-menu></common-menu>
    </template>
    <template #list>
      <list-department></list-department>
    </template>
  </CommonPageManagement>

</template>

<script lang="ts" setup>
import CommonHeader from "@/common/CommonHeader.vue"
import CommonMenu   from "@/common/CommonMenu.vue"
import ListDepartment from "@/components/ListDepartment.vue"
import CommonPageManagement from "@/common/CommonPageManagement.vue"
</script>

<style scoped>

</style>