<template>
<div class="bg-gray-800 font-sans font-semibold flex flex-col items-center">
  <div>{{ state.currentMap }}</div>
  <AppHeader />
  <ServerControl/>
  <MapList :map-data="state.mapData"/>
</div>
</template>

<script>
import mapData from './map.json'
import {takeServer, Servers} from './serverConnect'
import {onMounted, reactive} from "vue";
import MapList from "@/components/MapList";
import ServerControl from "@/components/ServerControl";
import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',
  components: {AppHeader, ServerControl, MapList},
  setup() {
    const state = reactive({
      error: false,
      ip: '',
      serverTitle: '',
      freeServers: 0,
      password: '',
      mapData: mapData,
    })


    setInterval(() => Servers(), 5000)

    onMounted(async () => {
      state.freeServers = await Servers()
    })


    takeServer()


    return {
      state
    }
  }

}
</script>

<style>


</style>
