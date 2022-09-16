<template>
  <div class="container flex flex-col  m-auto items-center">
    <AppHeader :server-name="'Invasion'"/>
    <ServerControl/>
    <MapList/>
  </div>

</template>

<script>
import AppHeader from "@/components/AppHeader";
import ServerControl from "@/components/ServerControl";
import MapList from "@/components/MapList";
import router from "@/router";

export default {
  name: "MainPage",
  components: {MapList, ServerControl, AppHeader},
  setup () {
    if(!localStorage.getItem('token')){
      router.replace({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>
