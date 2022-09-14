<template>
  <div class="relative">
    <div class="flex items-baseline relative">
      <input
          v-model="state.cmd"
          type="text"
          class="mt-5 p-2 pl-5 rounded-l-full shadow-lg shadow-gray-50/25 z-10 focus: outline-0 "
          placeholder="console">
      <AppButton class="w-24  right-0 top-2  z-0 rounded-r-full rounded-l-none ml-0" button-name="OK" @click="consoleCmd"/>
    </div>
    <div
        tabindex="0"
        class="flex w-fit absolute top-16 right-32 h-10 absolute right-3.5 top-14"
    >
      <ul
          class="py-0 flex flex-col items-center h-20 overflow-hidden"
      >
        <li
            v-for="(i, index) in searchResults"
            :key="index"
            class="px-3 py-2 cursor-pointer bg-white w-48"
            @click="handleChange(i)"
        >
          {{i}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import {computed, reactive} from "vue";
import {ServerControl} from "@/serverConnect";

export default {
  name: "AutoComplete",
  components: {AppButton},
  setup() {
    const mostCommand = [
      'mt_freezetime',
      'mp_friendlyfire',
      'bot_add ct',
      'bot_add t',
      'bot_kick ct',
      'bot_kick t'
    ]

    const state = reactive({
      cmd: '',
    })

    const searchResults = computed(() => {
      if(state.cmd === ''){
        return []
      }else {
        return mostCommand.filter((item) => {
          return item.toLowerCase().includes(state.cmd.toLocaleLowerCase());
        })
      }
    });

    const consoleCmd = () => {
      if(state.cmd !== ''){
        ServerControl(state.cmd, 'console')
        state.cmd = ''
      }
    }


    const handleChange = (value) => {
      state.cmd = value
    }

      return {
        mostCommand,
        state,
        searchResults,
        handleChange,
        consoleCmd
      }
    }
  }
</script>

<style scoped>
ul::-webkit-scrollbar {
  width: 0;
}
</style>