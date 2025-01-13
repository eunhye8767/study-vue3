<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" :="$attrs">MyButton</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	setup(props, context) {
		console.log('class', context.attrs.class);
		console.log('id', context.attrs.id);
		console.log('onClick', context.attrs.onClick);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
