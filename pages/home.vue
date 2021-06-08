<template>
  <div>

    <navbar></navbar>
    <!-- HERO -->
    <section
      id="hero"
      class="full-height"
    >
      <grid :gutter="0">
        <row>
          <column
            :size="6"
            class="middle"
          >
            <h1 ref="title">Is jou website toe aan vernieuwing ?</h1>
            <v-button href="#contact">Start met vernieuwen</v-button>
          </column>
          <column :size="6"></column>
        </row>
      </grid>
    </section>

  </div>
</template>

<script>
  export default {
    methods: {
      startTypewriter() {
        const content = this.$refs.title.textContent
        const typewriter = new Typewriter(this.$refs.title, {
          autoStart: true,
          loop: false,
          delay: 100
        })

        typewriter
          .typeString(content)
          .start()
          .callFunction(() => {
            const cursor = document.querySelector('.Typewriter__cursor')
            if (cursor) cursor.remove()
          })
      }
    },
    mounted() {
      if (process.browser) this.startTypewriter()
    }
  }
</script>

<style lang="scss" scoped>
  //// GENERAL
  .full-height,
  .full-height .row {
    height: 100vh;
  }

  //// HERO
  #hero,
  #hero .row {
      height: calc(100vh - 75px);
  }
</style>
