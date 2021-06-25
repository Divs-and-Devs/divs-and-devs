<template>
  <div>

    <navbar></navbar>
    <!-- HERO -->
    <section class="hero full-height">
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

    <!-- USPS -->
    <section class="usps">
      <grid :gutter="0">
        <row>
          <column :size="4">
            <h2>Koptekst</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. Condimentum diam orci pretium a pharetra, feugiat cursus. </p>

          </column>
          <column :size="4">
            <h2>Koptekst</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. Condimentum diam orci pretium a pharetra, feugiat cursus. </p>
          </column>
          <column :size="4">
            <h2>Koptekst</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel. Condimentum diam orci pretium a pharetra, feugiat cursus. </p>
          </column>
        </row>
      </grid>
    </section>

    <!-- CTA -->
    <section class="cta">
      <grid :gutter="0">
        <row>
          <column :size="2">
          </column>
          <column :size="8">
            <h2 >Neem contact met ons op</h2>
          </column>
          <column :size="2">
          </column>
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

  h1 {
    height: 175px;
  }

  //// USPS
  .usps .row .col {
    padding: 5%;
    box-sizing: border-box;

    &:first-of-type,
    &:last-of-type {
      background-color: #f2f2f2;
    }
  }

  //// CTA
  .cta {
    .col-8 {
      background: linear-gradient(
        90.11deg,
        rgba(245, 133, 0, 0.9) 0.09%,
        rgba(245, 133, 0, 0.72) 99.9%
      );
      box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      @include flex;

      h2 {
        color: #fff;
      }
    }
  }
</style>
