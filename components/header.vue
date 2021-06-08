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

    #logo img {
        height: 65px;
    }

    .col {
        @include flex;
    }
}
</style>