<template>
    <a-row id="globalHeader"  type="flex" >
      <a-col flex="3">
        <div class="logo" />
        <a-menu :selectedKeys="selectedKeys" theme="light" mode="horizontal" :style="{ lineHeight: '64px' }"
          @click="onMenuClick">
          <a-menu-item v-for="item in routes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="80px">
        {{ userStore.getLoginUser }}
      </a-col>
    </a-row>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { routes } from '../router/routes'
import {useUserStore} from '@/stores/user'

const router = useRouter()
const userStore=useUserStore()
const selectedKeys = ref(['/'])
setTimeout(()=>{
  userStore.login()
},3000)

router.afterEach((to, from, falure) => {
  selectedKeys.value = [to.path]
})
const onMenuClick = ({ key }) => {
  router.push({
    path: key
  })
}

</script>
<style scoped>
#globalHeader{
  width:100%;
}
#globalHeader .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  /* background: rgba(255, 255, 255, 0.3); */
  background-image: url('../assets/ojlogo.png');
  background-size: contain;
  /*调整图片大小，保持图片比例，使其完全显示在div内*/
  background-repeat: no-repeat;
  background-position: center center;
}
</style>