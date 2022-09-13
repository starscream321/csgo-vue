<template>
  <div class="relative w-full h-24">
    <img class="p-5 w-64 animate-pulse absolute left-0 top-0 z-10 " :src="'https://uni.invasion.ru/images/logo.svg'">
  </div>
  <div class="flex justify-center items-center">
    <AppButton @click="handlePass" :command="`sv_password${pass}`" :button-name="'TAKE PASSWORD'"/>
    <p class="text-white font-bold">PASSWORD: {{pass}}</p>
  </div>
</template>

<script>



import AppButton from "@/components/AppButton";
import {ref} from "vue";
export default {
  name: "AppHeader",
  components: {AppButton},
  setup(){
    const img = {
      image: './src/image/logoInvasion.svg'
    }

    const pass = ref()

    const handlePass =  () => {
      let password = Math.round((Math.random() * (9000 - 1000) + 1000))
      localStorage.setItem('pass', password)
      pass.value = password
    }

    setInterval(() => {
      if(localStorage.getItem('pass')){
        pass.value = JSON.parse(localStorage.getItem('pass'))
      }
    }, 5000)

    return {
      img,
      handlePass,
      pass
    }
  }
}
</script>

<style scoped>

</style>
