<template>
  <div id="header">
    <grid :gutter="0">
      <row>
        <column :size="4">
            <nav>
                <NuxtLink to="/">Over ons</NuxtLink>
                <NuxtLink to="/">Ons werk</NuxtLink>
                <NuxtLink to="/">Contact</NuxtLink>
            </nav>
        </column>
        <column :size="4" id="logo">
          <img
            src="~/assets/logo.svg"
            alt="phone"
          >
        </column>
        <column :size="4"></column>
      </row>
    </grid>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
#header {
    height: 65px;
    width: 100vw;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: 0px 1px 0px #E5E9F2;
    background: #fff;
    z-index: 10;

    #logo img {
        height: 65px;
    }

    .col {
        @include flex;

        a {
          color: #000;
          text-decoration-line: none;
          margin: 0 10px;
        }
    }
}
</style>