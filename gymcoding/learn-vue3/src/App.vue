<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('oldValue: ', oldValue);
		// 		console.log('sum: ', sum);
		// 	},
		// 	// sum => {
		// 	// 	console.log('sum: ', sum);
		// 	// },
		// );

		watch([x, y], ([newX, newY], [oldX, oldY]) => {
			console.log('oldX:', oldX, 'oldY:', oldY);
			console.log('newX:', newX, 'newY:', newY);
		});

		const obj = reactive({
			count: 0,
		});

		// watch(obj, (newValue, oldValue) => {
		// 	console.log('oldValue:', oldValue);
		// 	console.log('newValue:', newValue);
		// });
		watch(
			// obj(오브젝트)의 count 속성처럼 감지하고 싶을 땐 getter 함수를 사용하여 작업한다.
			// getter 함수 == () => obj.count
			() => obj.count,
			(newValue, oldValue) => {
				console.log('oldValue:', oldValue);
				console.log('newValue:', newValue);
			},
		);
		return { x, y, obj };
	},
};
</script>

<style lang="scss" scoped></style>
