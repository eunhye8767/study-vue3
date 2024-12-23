<template>
	<div></div>
</template>

<script>
import { reactive, readonly, ref, toRef, toRefs } from 'vue';

export default {
	setup() {
		// ref ->  Object
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		count.value++;

		console.log(count.value);
		console.log('state.count :', state.count);

		// ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]', arr[0].value);

		// 구조 분해 할당
		const book = reactive({
			author: 'vue team',
			year: '2020',
			title: 'vue 3 guide',
			description: '당신은 지금 바로',
			price: '무료',
		});

		// toRefs를 이용해 구조 분해 할당으로 반응형 유지
		// const { author, title } = book; <- 반응형 안됨.
		const { author, title } = toRefs(book);

		// 하나의 데이터 값만 가져오고자 할 땐 toRef 사용
		const price = toRef(book.price);

		// readonly를 이용한 반응형 객체 변경 방지
		const original = reactive({ count: 0 });
		const copy = readonly(original);
		original.count++;
		copy.count++;
		console.log(original.count);
		console.log(copy.count);
		return { author, title, book, price };
	},
};
</script>

<style lang="scss" scoped></style>
