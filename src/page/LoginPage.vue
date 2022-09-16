<template>
<div class="fixed flex flex-col flex-nowrap w-full h-full justify-center items-center">
  <img class="w-56 m-5 ml-0 animate-pulse" :src="'https://uni.invasion.ru/images/logo.svg'">
  <input v-model="state.pass"
         placeholder="PASSWORD"
         class="text-black p-2 pl-5 rounded-full shadow-lg shadow-gray-50/25 z-10 focus: outline-0 "
         type="password"
         @keydown.enter="handleClick">
  <AppButton @click="handleClick" :button-name="'Log in'"/>
  <h1 v-if="state.serverCount === 0 " >Серверов нет!</h1>
</div>
</template>

<script>
import {reactive} from "vue";
import AppButton from "@/components/AppButton";
import {Servers, TakeServer} from "@/serverConnect";
import router from "@/router";

export default {
  name: "LoginPage",
  components: {AppButton},
  setup(){
    const state = reactive({
        pass: '',
        serverCount: '',
        img: './src/image/logoInvasion.svg'
    })

    if(localStorage.getItem('token')){
      router.replace({name: 'login'})
    }
    setInterval(() => {
      Servers().then(res => state.serverCount = res)
    }, 2000)

    const handleClick = () => {
      TakeServer(state.pass).then((res) => {
        if(res === 'OK'){
          router.replace({name: 'server'})
        }
      })
    }


    return {
      state,
      handleClick
    }
  }
}
</script>

<style scoped>
</style>
