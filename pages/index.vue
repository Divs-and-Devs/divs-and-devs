<template>
  <div class="page">
	  <h1>Divs &amp; Devs</h1>
	  <h2>Coming soon!</h2>

	<div class="email">
		<sub>Get notified when we go live. Leave your email here, we will be careful with it.</sub>
	  <input type="email" placeholder="john@mail.com">
	  <v-button>Get notified</v-button>
	  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h1 {
		font-size: 25vh;
		margin: 1rem;
	}

	input {
		font-size: 1rem;
		border: 2px solid #7e5ded;
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		border-radius: 1rem;
	}

	.email {
		sub {
			display: grid;
		}
	}
}
</style>
