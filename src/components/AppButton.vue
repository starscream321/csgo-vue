<template>
  <button
      class="button">
    {{buttonName}}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    buttonName: String
  }
}
</script>

