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

export default {
  name: "MainPage",
  components: {MapList, ServerControl, AppHeader},
  setup () {

  }
}
</script>

<style scoped>

</style>