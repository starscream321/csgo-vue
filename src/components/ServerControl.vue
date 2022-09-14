<template>
  <div class="flex items-center p-20 flex-col flex-wrap w-2/3">
    <div class="flex flex-wrap justify-evenly">
      <div>
        <AppButton @click="consoleCmd" :value="command.restart" :button-name="'RESTART'"/>
        <AppButton @click="consoleCmd" :value="command.pause" :button-name="'PAUSE'"/>
        <AppButton @click="consoleCmd" :value="command.unPause" :button-name="'UNPAUSE'"/>
      </div>
    </div>
    <div class="inline-block">
      <AutoComplete />
    </div>
  </div>
</template>

<script>
import {ServerControl} from "@/serverConnect";
import AppButton from "@/components/AppButton";
import AutoComplete from "@/components/AutoComplete";


export default {
  name: "ServerControl",
  components: {AutoComplete, AppButton},
  setup() {
    const command = {
      restart: 'mp_restartgame 1',
      pause: 'mp_pause_match',
      unPause: 'mp_unpause_match'
    }


    const consoleCmd = (event) => {
      ServerControl(event.target.value, 'console')
    }


    return {
      command,
      consoleCmd
    }
  }
}
</script>

<style scoped>

</style>
