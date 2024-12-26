<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
			consectetur atque iste necessitatibus eligendi ullam illum, cupiditate
			recusandae reiciendis saepe natus rem ut iusto nulla voluptatum, aliquid
			ab sequi neque.
		</div>
		<button @click="fontSize--">-</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '18px',
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style scoped></style>
