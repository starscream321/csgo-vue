<template>
  <div class="relative w-full h-24">
    <img class="p-5 w-64 animate-pulse absolute left-0 top-0 z-10 " :src="'https://uni.invasion.ru/images/logo.svg'">
  </div>
</template>

<script>



export default {
  name: "AppHeader",

  setup(){
    const img = {
      image: './src/image/logoInvasion.svg'
    }

    return img
  }
}
</script>

<style scoped>

</style>
