<template>
  <div class="page" :class="{gradient}">
    <div class="heading">
      <img src="logo.svg" alt="divs & devs" @mouseenter="gradient=true" @mouseleave="gradient=false" @touchstart="gradient=true" @touchend="gradient=false"/>
      <h1>Divs &amp; Devs</h1>
      <h2>Web development</h2>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      gradient: false
    }
  },
}
</script>
<style lang="scss" scoped>
  .page {
    height: 100vh;
    width: 100vw;
    user-select: none;
    position: relative;

    &::after {
      content: ' ';
      display: block;
      opacity: 0;
      position: absolute;
      z-index: -1;
      inset: 0;
      background: $gradient;
      transition: opacity 5s ease;
    }

    &.gradient::after {
      opacity: 1;
    }

    @include flex;

    h1,
    h2,
    h3 {
      margin: 0px;
    }

    // HEADING
    .heading {
      margin:  5rem 0;
      text-align: center;

      img {
        opacity: 0;
        width: min(20rem, 90vw);
        animation: fade-in 500ms ease-in-out forwards;
        filter: drop-shadow(0 8px 16px rgba(0,0,0, .16));
      }

      h1 {
        opacity: 0;
        margin-top: .5em;
        font-size: 5em;
        letter-spacing: 2px;
        animation: fade-in 500ms ease-in-out 500ms forwards;
      }

      h2 {
        opacity: 0;
        font-size: 1.5rem;
        animation: fade-in 500ms ease-in-out 750ms forwards;
      }
    }
  }
</style>
