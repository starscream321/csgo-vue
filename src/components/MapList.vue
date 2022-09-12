<template>
  <div class="flex flex-col items-center">
    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" v-model="listState.checked"  id="default-toggle" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Custom maps</span>
    </label>
    <div class="flex flex-row flex-wrap justify-center w-2/3 box-border">
      <template v-if="!listState.checked">
        <MapCard @change-map="handleChangedMap" v-for="(map, idx) in listState.originMap" :img="map.img" :command="map.name" :key="idx"/>
      </template>
      <template v-else>
        <MapCard @change-map="handleChangedMap" v-for="(map, idx) in listState.customMap" :img="map.img" :command="map.name" :key="idx"/>
      </template>
    </div>
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

    const listState = reactive({
      map: '',
      originMap: [],
      customMap: [],
      command: 'changeMap',
      apiKey: '',
      checked: false
    })


    listState.originMap = props.mapData.filter(({thisOffMap}) => thisOffMap === true)
    listState.customMap = props.mapData.filter(({thisOffMap}) => thisOffMap !== true)

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
