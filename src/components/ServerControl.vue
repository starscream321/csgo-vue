<template>
  <div class="flex justify-center p-20 flex-row flex-wrap w-2/3">
    <AppButton @send-command="consoleCmd" :command="command.restart" :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <AppButton :button-name="'Restart'"/>
    <div class="inline-block">
      <input type="text" class="mt-5 p-2 pl-3 rounded-full shadow-lg shadow-gray-50/25" placeholder="console">
      <AppButton class="w-24" button-name="OK" />
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
  setup(){
    const command = {
      restart: 'mp_restartgame 1'
    }

    const state = reactive({
      apiKey: '',
      command: 'console'
    })

    const consoleCmd = (value) => {
      ServerControl(value, state.command, state.apiKey)
      console.log(value)
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
