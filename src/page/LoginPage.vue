<template>
<div class="text-white">
  <input v-model="state.pass" class="text-black" type="password">
  <AppButton @click="handleClick" :button-name="'Log in'"/>
</div>
</template>

<script>
import {reactive} from "vue";
import AppButton from "@/components/AppButton";
import {takeServer} from "@/serverConnect";

export default {
  name: "LoginPage",
  components: {AppButton},
  setup(){
    const state = reactive({
        pass: ''
    })

    const handleClick = () => {
      takeServer(state.pass).then()
    }


    return {
      state,
      handleClick
    }
  }
}
</script>

<style scoped>

</style>