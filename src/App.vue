<template>
  <div style="-webkit-app-region: drag" class="p-2 pl-3 text-white">Invasion Server</div>
  <div>
    <router-view></router-view>
  </div>

</template>
<script>
import router from "@/router";

export default {
  name: "App",
  setup(){
    console.log(router.currentRoute)
  }
}

console.log(router.currentRoute)
</script>
<style>

</style>
