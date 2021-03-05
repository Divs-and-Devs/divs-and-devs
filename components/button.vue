<template>
	<button @click="$emit('click', $event)">
		<slot />
	</button> 
</template>

<style lang="scss" scoped>
button {
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.25px;

	border: none;
	background-color: $accent;
	color: $accent-text-color;
	border-radius: 8px;
    padding: 1rem 3rem;

	transition: background-color 100ms ease;

	&:focus,
	&:hover {
		background-color: $accent;
		cursor: pointer;
	}

	&:active {
		background-color: $accent;
	}
}
</style>