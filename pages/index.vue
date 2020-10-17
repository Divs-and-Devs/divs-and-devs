<template>
  <div class="page">
	  <h1>Divs <wbr>&amp;<wbr> Devs</h1>
	  <h2>Coming soon!</h2>

	<div class="email">
		<sub>Get notified when we go live. Leave your email here, we will be careful with it.</sub>
		<form action="/" method="get">
	  	<input type="email" name="email" placeholder="john@mail.com">
	  	<v-button>Get notified</v-button>
	  </form>
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
	padding: 2rem;
	box-sizing: border-box;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h1 {
		font-size: 25vmin;
		margin: 1rem;
		text-align: center;
		word-break: break-all;
	}

	input {
		font-size: 1rem;
		border: 2px solid #7e5ded;
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		border-radius: 1rem;
	}

	.email {

		@include tablet {
			text-align: center;
		}

		sub {
			display: block;
		}
	}
}
</style>
