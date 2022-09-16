<template>
  <div @upMap="changeMap" class="flex flex-row flex-wrap w-44 place-content-center m-6">
    <img loading="lazy" :src="img">
    <AppButton :command="command" @click="changeMap" :button-name="buttonName" />
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


    const changeMap = () => {
      emit('changeMap', props.command)
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
