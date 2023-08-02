

<template>
 <div id="app">
  <BasicLayout/>
 </div>
</template>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue"
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user";

const userStore =useUserStore();
const router = useRouter()
router.beforeEach((to,from,next)=>{
  if(to.meta.access==='admin'){
    if(userStore.getLoginUser!='管理员'){
      next('/noAuth')
    }
  }
  next()
})

</script>
<style scoped>

#app{
  /* height: 100vh;
  widows: 100vw; */
}

</style>
