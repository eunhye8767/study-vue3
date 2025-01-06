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

		const person = reactive({
			name: '홍길동',
			age: 39,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, (newValue, oldValue) => {
		// 	console.log('oldValue:', oldValue);
		// 	console.log('newValue:', newValue);
		// });
		watch(
			// person의 obj가 변경될 경우에만 감지.
			// person의 obj 안에 count 값이 바뀌어도 변화 없다. 콘솔로그 없다.
			() => person.obj,
			(newValue, oldValue) => {
				console.log('oldValue:', oldValue);
				console.log('newValue:', newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
