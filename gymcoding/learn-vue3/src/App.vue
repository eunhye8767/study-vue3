<template>
	<div>{{ counter }}</div>
	<button @click="increment">click</button>
</template>

<script>
import { ref } from 'vue';

export default {
	props: {
		title: String,
	},

	// 첫번째 매개변수 => props
	// 두번째 매개변수 => context
	setup(props, context) {
		const counter = ref(0);
		const increment = () => {
			counter.value++;
		};

		console.log(props.title);

		// 속성($attrs와 동일한 비반응형 객체)
		console.log(context.attrs);

		// 슬롯($slots)에 해당하는 비반응성 객체
		console.log(context.slots);

		// 이벤트 발생($emit에 해당하는 함수)
		console.log(context.emit);

		// Public한 속성, 함수를 외부에 노출시에 사용
		console.log(context.expose);

		return { counter, increment };
	},

	// context 구조 분해 할당 가능
	// setup(props, { attrs, slots, emit, expose }) {
	// 	// 속성($attrs와 동일한 비반응형 객체)
	// 	console.log(attrs);

	// 	// 슬롯($slots)에 해당하는 비반응성 객체
	// 	console.log(slots);

	// 	// 이벤트 발생($emit에 해당하는 함수)
	// 	console.log(emit);

	// 	// Public한 속성, 함수를 외부에 노출시에 사용
	// 	console.log(expose);
	// },
};
</script>

<style lang="scss" scoped></style>
