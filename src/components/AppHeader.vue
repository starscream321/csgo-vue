<template>
    <div class="relative w-full h-24">
      <img class="p-5 w-64 animate-pulse absolute left-0 top-5 z-10 " :src="'https://uni.invasion.ru/images/logo.svg'">
      <h2 class="text-white uppercase font-extrabold absolute p-5 top-20 mt-1 left-8">{{state.serverName}}</h2>
      <AppButton class="absolute right-0 top-5" @click="handleLogOut" :button-name="'Log out'"/>
    </div>
    <div class="flex flex-col justify-center items-center ">
      <AppButton @click="handlePass" :command="`sv_password${state.pass}`" :button-name="'TAKE PASSWORD'"/>
      <p class="text-white font-bold">PASSWORD: {{state.pass}}</p>
    </div>
</template>

<script>



import AppButton from "@/components/AppButton";
import {reactive} from "vue";
import {ServerControl} from "@/serverConnect";
import {LogOut} from "@/serverConnect";
import router from "@/router";

export default {
  name: "AppHeader",
  components: {AppButton},
  props: {
    serverName: String
  },
  setup(){

    const state = reactive({
      pass: '',
      serverName: ''
    })

    const handleLogOut = () => {
      LogOut()
      localStorage.removeItem('token')
      localStorage.removeItem('pass')
      localStorage.removeItem('name')
      router.replace({path: '/'})
    }

    const handlePass =  () => {
      let password = Math.round((Math.random() * (9000 - 1000) + 1000))
      localStorage.setItem('pass', password)
      state.pass = password
      ServerControl(password, 'console')
    }
    state.serverName = localStorage.getItem('name')

    return {
      handlePass,
      state,
      handleLogOut
    }
  }
}
</script>

<style scoped>

</style>
