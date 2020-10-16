<template>
  <div :class="'col col-' + size">
      <slot />
  </div>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            required: false,
            default: 12
        }
    }
}
</script>

<style scoped lang="scss">
    .col {
        position: relative;
        min-height: 1px;
        margin: 0 calc(var(--gutter) / 2); 
    }

    .col-1 { width: calc((100%/(12/1)) - var(--gutter)); }
    .col-2 { width: calc((100%/(12/2)) - var(--gutter)); }
    .col-3 { width: calc((100%/(12/3)) - var(--gutter)); }
    .col-4 { width: calc((100%/(12/4)) - var(--gutter)); }
    .col-5 { width: calc((100%/(12/5)) - var(--gutter)); }
    .col-6 { width: calc((100%/(12/6)) - var(--gutter)); }
    .col-7 { width: calc((100%/(12/7)) - var(--gutter)); }
    .col-8 { width: calc((100%/(12/8)) - var(--gutter)); }
    .col-9 { width: calc((100%/(12/9)) - var(--gutter)); }
    .col-10 { width: calc((100%/(12/10)) - var(--gutter)); }
    .col-11 { width: calc((100%/(12/11)) - var(--gutter)); }
    .col-12 { width: calc((100%/(12/12)) - var(--gutter)); }

    @include desktop {
        .col-1:nth-child(12n+1),
        .col-2:nth-child(6n+1),
        .col-3:nth-child(4n+1),
        .col-4:nth-child(3n+1),
        .col-6:nth-child(2n+1),
        .col-12:nth-child(1n+1) {
            clear: left;
        }
    }
    @include tablet {
        .col-1t { width: calc((100%/(12/1)) - var(--gutter)); }
        .col-2t { width: calc((100%/(12/2)) - var(--gutter)); }
        .col-3t { width: calc((100%/(12/3)) - var(--gutter)); }
        .col-4t { width: calc((100%/(12/4)) - var(--gutter)); }
        .col-5t { width: calc((100%/(12/5)) - var(--gutter)); }
        .col-6t { width: calc((100%/(12/6)) - var(--gutter)); }
        .col-7t { width: calc((100%/(12/7)) - var(--gutter)); }
        .col-8t { width: calc((100%/(12/8)) - var(--gutter)); }
        .col-9t { width: calc((100%/(12/9)) - var(--gutter)); }
        .col-10t { width: calc((100%/(12/10)) - var(--gutter)); }
        .col-11t { width: calc((100%/(12/11)) - var(--gutter)); }
        .col-12t { width: calc((100%/(12/12)) - var(--gutter)); }
        .colThide {
            display: none;
        }	
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) /* Desktop */ {
        .col-1t:nth-child(12n+1),
        .col-2t:nth-child(6n+1),
        .col-3t:nth-child(4n+1),
        .col-4t:nth-child(3n+1),
        .col-6t:nth-child(2n+1),
        .col-12t:nth-child(1n+1) {
            clear: left;
        }
    }
    @include mobile {
        .col-1m { width: calc((100%/(12/1)) - var(--gutter)); }
        .col-2m { width: calc((100%/(12/2)) - var(--gutter)); }
        .col-3m { width: calc((100%/(12/3)) - var(--gutter)); }
        .col-4m { width: calc((100%/(12/4)) - var(--gutter)); }
        .col-5m { width: calc((100%/(12/5)) - var(--gutter)); }
        .col-6m { width: calc((100%/(12/6)) - var(--gutter)); }
        .col-7m { width: calc((100%/(12/7)) - var(--gutter)); }
        .col-8m { width: calc((100%/(12/8)) - var(--gutter)); }
        .col-9m { width: calc((100%/(12/9)) - var(--gutter)); }
        .col-10m { width: calc((100%/(12/10)) - var(--gutter)); }
        .col-11m { width: calc((100%/(12/11)) - var(--gutter)); }
        .col-12m { width: calc((100%/(12/12)) - var(--gutter)); }
        .colMhide {
            display: none;
        }	
    }
    @media screen and (min-width: 414px) and (max-width: 767px) {
        .col-1m:nth-child(12n+1),
        .col-2m:nth-child(6n+1),
        .col-3m:nth-child(4n+1),
        .col-4m:nth-child(3n+1),
        .col-6m:nth-child(2n+1),
        .col-12m:nth-child(1n+1) {
            clear: left;
        }
    }
    @media screen and (max-width: 413px) {
        .col-1s { width: calc((100%/(12/1)) - var(--gutter)); }
        .col-2s { width: calc((100%/(12/2)) - var(--gutter)); }
        .col-3s { width: calc((100%/(12/3)) - var(--gutter)); }
        .col-4s { width: calc((100%/(12/4)) - var(--gutter)); }
        .col-5s { width: calc((100%/(12/5)) - var(--gutter)); }
        .col-6s { width: calc((100%/(12/6)) - var(--gutter)); }
        .col-7s { width: calc((100%/(12/7)) - var(--gutter)); }
        .col-8s { width: calc((100%/(12/8)) - var(--gutter)); }
        .col-9s { width: calc((100%/(12/9)) - var(--gutter)); }
        .col-10s { width: calc((100%/(12/10)) - var(--gutter)); }
        .col-11s { width: calc((100%/(12/11)) - var(--gutter)); }
        .col-12s { width: calc((100%/(12/12)) - var(--gutter)); }
        .colShide {
            display: none;
        }	
    }

    @media screen and (max-width: 413px) {
        .col-1s:nth-child(12n+1),
        .col-2s:nth-child(6n+1),
        .col-3s:nth-child(4n+1),
        .col-4s:nth-child(3n+1),
        .col-6s:nth-child(2n+1),
        .col-12s:nth-child(1n+1) {
            clear: left;
        }
    }
</style>