<template>
  <CommonPageManagement>
    <template #header>
      <common-header>Employee Management</common-header>
    </template>
    <template #menu>
      <common-menu></common-menu>
    </template>
    <template #list>
      <list-employee></list-employee>
    </template>
  </CommonPageManagement>

</template>

<script lang="ts" setup>
import CommonHeader from "@/common/CommonHeader.vue"
import CommonMenu   from "@/common/CommonMenu.vue"
import ListEmployee from "@/components/ListEmployee.vue"
import CommonPageManagement from "@/common/CommonPageManagement.vue"
</script>

<style scoped>

</style>