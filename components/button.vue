<template>
	<button @click="$emit('click', $event)">
		<slot />
	</button> 
</template>

<style lang="scss" scoped>
button {
	font-size: 1rem;

	border: none;
	background-color: $accent;
	color: $accent-text-color;
	border-radius: $border-radius;
	
	padding: 0.5rem 3rem;

	transition: background-color 100ms ease;

	&:focus,
	&:hover {
		background-color: $accent-dark;
	}

	&:active {
		background-color: $accent-light;
	}
}
</style>