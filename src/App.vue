<template>
  <CommonPageManagement>

    <template #list>
      <router-view> </router-view>
    </template>
  </CommonPageManagement>

</template>

<script lang="ts" setup>

import CommonMenu   from "@/common/CommonMenu.vue"
import CommonPageManagement from "@/layout/PageManagement.vue"
</script>

<style scoped>

</style>