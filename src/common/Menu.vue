<template>
  <div class="common-menu">
    <ul class="common-menu-list">
        <li    class="common-menu-item" v-for="item in menuList" :key="item" >
          <router-link class="menu-link " :to="item.link">
              {{item.item}}
          </router-link>

        </li>

    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref} from 'vue'





let menuList = ref([
  {item:"Department Management",link:"/manage-department"},
  {item:"Employee Management",link:"/manage-employee"},
  {item:"Project Management",link:"/manage-project"}
])

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
  background-color: #F9FAFE;
  border-radius: 20px;
  text-align: center;

  margin: 30px 10px;



}
.menu-link {
  text-decoration: none;
  color: #000;

}
.menu-link:hover {
  font-size: 15px;
}
.router-link-active{
  background-color: yellowgreen ;
  padding: 10px 0px;
  border-radius: 10px;
}
</style>