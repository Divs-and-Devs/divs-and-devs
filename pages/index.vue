<template>
  <div>
    <h1>Test site</h1>
	<v-button @click="showModal">Hello</v-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
})
export default class Index extends Vue {
	showModal() {
		alert("Yo dawg.");
	}
}
</script>
