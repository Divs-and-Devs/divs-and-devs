<template>
  <div class="row">
      <slot/>
  </div>
</template>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-flow: wrap;
    width: 100%;
  }
</style>