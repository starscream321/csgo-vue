<template>
  <div class="flex items-center p-20 flex-col flex-wrap w-2/3">
    <div class="flex flex-wrap justify-evenly">
      <div>
        <AppButton @click="consoleCmd" :value="command.restart" :button-name="'RESTART'"/>
        <AppButton @click="consoleCmd" :value="command.pause" :button-name="'PAUSE'"/>
        <AppButton @click="consoleCmd" :value="command.unPause" :button-name="'UNPAUSE'"/>
      </div>
      <div>
        <AppButton @click="consoleCmd" :value="command.botCt" :button-name="'BOT CT'"/>
        <AppButton @click="consoleCmd" :value="command.botT" :button-name="'BOT T'"/>
        <AppButton @click="consoleCmd" :value="command.botKickCt" :button-name="'KICK BOT CT'"/>
        <AppButton @click="consoleCmd" :value="command.botKickT" :button-name="'KICK BOT T'"/>
      </div>
    </div>
    <div class="inline-block">
      <input
          v-model="input.cmd"
          type="text"
          class="mt-5 p-2 pl-3 rounded-full shadow-lg shadow-gray-50/25"
          placeholder="console">
      <AppButton @click="consoleCmd" class="w-24" button-name="OK"/>
    </div>
  </div>
</template>

<script>
import {ServerControl} from "@/serverConnect";
import AppButton from "@/components/AppButton";
import {reactive} from "vue";


export default {
  name: "ServerControl",
  components: {AppButton},
  setup() {
    const command = {
      restart: 'mp_restartgame 1',
      pause: 'mp_pause_match',
      unPause: 'mp_unpause_match',
      botCt: 'bot_add ct',
      botT: 'bot_add t',
      botKickCt: 'bot_kick ct',
      botKickT: 'bot_kick t'
    }

    const input = reactive({
      cmd: ''
    })

    const consoleCmd = (event) => {
      ServerControl(event.target.value || input.cmd, 'console')
    }


    return {
      command,
      consoleCmd,
      input
    }
  }
}
</script>

<style scoped>

</style>
