<template>
	<component :is="!href ? 'button' : 'a'" :href="href" @click="$emit('click', $event)" :class="type">
		<slot />
	</component>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			default: "purple"
		},
		href: {
			type: String,
			default: undefined
		}
	}
}
</script>
<style lang="scss" scoped>
button, a {
	svg {
		margin-left: 1rem;
	}
}

button, a {
	font-size: 1rem;
	font-weight: 500;
	display: inline-block;
	text-decoration: none;

	border: none;

	--background: #{$accent};
	--color: #{$accent-text-color};

	background-color:var(--background);
	color: var(--color);
	border-radius: 5px;
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
	&.text {
		--background: none;
		box-shadow: none;

		font-weight: 700;
		font-size: 1.25rem;
		color: $accent;
		margin: 1rem 0;

		&.orange {
			color: $accent2;
		}
	}
}

</style>