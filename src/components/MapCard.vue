<template>
  <div @upMap="changeMap" class="flex flex-row flex-wrap w-56 place-content-center m-2">
    <img :src="img">
    <AppButton :command="command" @send-command="changeMap" :button-name="buttonName" />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
export default {
  name: "MapCard",
  components: {AppButton},
  props: {
    command: String,
    img: String,
  },

  setup(props,{emit}){

    const buttonName = 'START'


    const changeMap = (n) => {
      emit('changeMap', n)
    }


    return {
      changeMap,
      buttonName
    }


  }
}
</script>

<style scoped>

</style>
