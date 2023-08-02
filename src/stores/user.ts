import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('未登录')
  const getLoginUser = computed(()=> name.value)
  function login(){
    name.value='管理员'
  }

  return { name,login,getLoginUser }
})
