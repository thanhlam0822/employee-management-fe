<template>
  <div class="pagination">
    <div class="show-entries">
      Show entries

    </div>

     <slot name="paginate"></slot>
  </div>
</template>

<script>
export default {
  name: "CommonFilterAndPaginate"
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
}
.input {
  margin: 0px 5px;
}
.show-entries {
  font-weight: bold;
}
</style>