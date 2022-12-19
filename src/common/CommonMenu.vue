<template>
  <div class="common-menu">
    <ul class="common-menu-list">
      <li class="common-menu-item"><router-link class="menu-link" to="/manage-department">Department Management</router-link> </li>
      <li class="common-menu-item"><router-link class="menu-link" to="/manage-employee">Employee Management </router-link></li>
      <li class="common-menu-item"><router-link class="menu-link" to="/manage-project">Project Management</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.common-menu {
  background-color: #F9FAFE;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 30px;
  font-weight: bold;
  border-radius: 15px;
  height: 100vh;

}
.common-menu-list {
  list-style: none;


}
.common-menu-item {

  height: 10vh;
  padding-top:45px;
  margin-left: 10px;

}
.menu-link {
  text-decoration: none;
  color: #000;
}
.menu-link:hover {
  font-size: 17px;
}
th.el-table_1_column_1.is-leaf.el-table__cell {
  background-color: #989BE5;
}
</style>