<template>
	<div class="p-3 bg-danger">
		<!-- <button type="button" class="btn btn-primary" :="$attrs">MyButton</button> -->
		<button type="button" class="btn btn-primary" @click="sayHello">
			MyButton
		</button>
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emits: ['click'],
	setup(props, { emit }) {
		// console.log('class', context.attrs.class);
		// console.log('id', context.attrs.id);
		// console.log('onClick', context.attrs.onClick);

		const sayHello = () => {
			emit('click');
		};

		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
