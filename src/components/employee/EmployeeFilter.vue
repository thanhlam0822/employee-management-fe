<template>
  <div class="filter-action">

     <div class="filter-name"><p>Name</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
     <div class="filter-name"><p>Role</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
     <div class="filter-name"><p>Dept</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
     <div class="filter-name"><p>Status</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
     <div class="filter-name"><p>Email</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
     <div class="filter-name"><p>Phone</p></div>
     <div class="filter-input">
       <input class="input" />
     </div>
    <div></div>

   </div>


</template>

<script lang="ts" setup>



</script>

<style scoped>
.filter-input {
  margin-left: 5px;

}
.filter-name {
  margin-left: 10px;
}
input.input {
  width: 10vh;
  padding: 1vh;
  border-radius: 10px;
}
.filter-action {
  display: flex;
}

</style>