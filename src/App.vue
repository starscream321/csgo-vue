<template>
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
