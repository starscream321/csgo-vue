<template>
  <button class="bg-blue-500 rounded-full p-2 w-44 shadow-lg shadow-blue-500/50 m-3 hover:bg-blue-500/70 " @click="$emit('sendCommand', command)">
    <p class="text-white">{{buttonName}}</p>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    command: String,
    buttonName: String
  },
  setup() {


  }
}
</script>

