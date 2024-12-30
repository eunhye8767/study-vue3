<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>false 입니다.</h2>
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<h2 v-if="type === 'A'">A 입니다.</h2>
		<h2 v-else-if="type === 'B'">B 입니다.</h2>
		<h2 v-else-if="type === 'C'">C 입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>
		<hr />
		<template v-if="visible">
			<h1>title</h1>
			<p>paragraph 1</p>
			<p>paragraph 2</p>
		</template>
		<hr />
		<h1 v-show="ok">Title 입니다.</h1>
		<button v-on:click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(false);
		const type = ref('B');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
