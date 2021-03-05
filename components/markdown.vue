<template>
    <div v-html="content"/>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        content() {
            return this.$md.render(this.text);
        }
    }
}
</script>

<style>

</style>