<template>
	<button @click="$emit('click', $event)" :class="type">
		<slot />
	</button>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: "purple"
		}
	}
}
</script>
<style lang="scss" scoped>
button {
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.25px;

	border: none;

	--background: #{$accent};
	--color: #{$accent-text-color};

	background-color:var(--background);
	color: var(--color);
	border-radius: 8px;
    padding: 1rem 3rem;
	transition: transform 250ms ease, box-shadow 250ms ease;

	&:focus,
	&:hover {
		box-shadow: $shadow;
		transform: translateY(-5px);
		cursor: pointer;
	}

	&.white {
		--background: #fff;
		--color: #{$accent};

	}
}
</style>