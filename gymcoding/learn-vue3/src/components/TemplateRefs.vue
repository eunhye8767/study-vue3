<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}<br />
			동일한 값인 가? {{ $refs.input === input }}
		</p>
		<hr />
		<ul>
			<!-- <li v-for="(fruit, index) in fruits" :key="index" ref="itemRefs"> -->
			<li
				v-for="(fruit, index) in fruits"
				:key="index"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child" />
	</div>
</template>

<script>
import TemplateRefsChild from './TemplateRefsChild.vue';
import { onMounted, ref } from 'vue';

export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);

		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted : ', input.value);

			// itemRefs.value.forEach(item => console.log('item :', item.textContent));
			itemRefs.value.forEach(item => console.log('item :', item));

			console.log('child.message :', child.value.message);
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);

		return {
			input,
			fruits,
			itemRefs,
			child,
		};
	},
};
</script>

<style lang="scss" scoped></style>
