<template>
  <div class="wrapper" :style="'--gutter:' + gutter + 'px'">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 0;
  margin: auto;
  --gutter: 34px;
  max-width: 1110px;
}
</style>