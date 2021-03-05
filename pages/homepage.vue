<template>
  <div>
    <!-- HERO -->
    <section id="hero">
      <h1 ref="title"></h1>
      <v-button>Start met vernieuwen</v-button>
    </section>

    <!-- CALL TO ACTION -->
    <section>
      <grid :gutter="0">
        <row class="cta">
          <column :size="12"> 
            <h2>{{cta_text}}</h2>
          </column>
        </row>
      </grid>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    return await $strapi.find('homepage')
  },

  methods: {
    startTypewriter() {
      const typewriter = new Typewriter(this.$refs.title, {
        autoStart: true,
        loop: false,
        delay: 100,
      })

      typewriter
        .typeString(this.title)
        .start()
        .callFunction(() => {
          document.querySelector('.Typewriter__cursor').remove()
        })
    },
  },
  mounted() {
    this.startTypewriter()
  },
}
</script>

<style lang="scss" scoped>
h1 {
  max-width: 710px;
  text-align: center;
  margin: 0 auto 3rem auto;
}

section {
  overflow: hidden;

  &#hero {
    max-height: 100vh;
    flex-direction: column;
    position: relative;

    @include flex;

    &:after {
      content: '';
      background: $accent2;
      width: 1200px;
      height: 1200px;
      border-radius: 100%;
      position: absolute;
      left: auto;
      right: auto;
      bottom: -110%;
    }
  }
}

.row {
  &.cta {
    background: $accent;
    border-radius: $border-radius;

    .col {
      @include flex;
      flex-direction: column;
      
      h2{
        color: #fff;
      }

    }
  }
}
</style>