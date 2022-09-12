<template>
  <div class="flex flex-row flex-wrap justify-center w-2/3 box-border">
    <MapCard @change-map="handleChangedMap" v-for="(map, idx) in mapData" :img="map.img" :command="map.name" :key="idx"/>
  </div>
</template>

<script>
import {ServerControl} from "@/serverConnect";
import MapCard from "@/components/MapCard";
import {reactive} from "vue";

export default {
  name: "MapList",
  components: {MapCard},
  props: {
    mapData: Array
  },
  setup(props) {
    console.log(props.mapData)
    const listState = reactive({
      map: '',
      command: 'changeMap',
      apiKey: ''
    })

    const handleChangedMap = (n) => {
      listState.map = n
      ServerControl(listState.map, listState.command, listState.apiKey)
      console.log(listState.map)
    }


    return {
      handleChangedMap,
      listState
    }
  }
}
</script>

<style scoped>

</style>
