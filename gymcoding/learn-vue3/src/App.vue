<template>
	<div>
		<ul>
			<!-- <template v-for="(item, index) in items" :key="item.id">
				<li v-if="item.id % 2 === 0">
					ID: {{ item.id }} 인덱스 : {{ index }}, {{ item.message }}
				</li>
			</template> -->
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>ID: {{ item.id }} 인덱스 : {{ index }}, {{ item.message }}</li>
			</template>
			<!-- <li v-for="(item, index) in items" :key="item.id">
				인덱스 : {{ index }}, {{ item.message }}
			</li> -->
		</ul>
	</div>
	<hr />
	<ul>
		<li v-for="(value, key, index) in myObject" :key="index">
			{{ index }} - {{ key }} - {{ value }}
		</li>
	</ul>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'JAVA' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'VUE' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2020-12-30',
		});
		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
