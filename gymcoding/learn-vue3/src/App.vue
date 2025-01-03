<template>
	<div>
		<!-- <input type="text" v-model.lazy="inputValue" /> -->

		<!-- <input type="text" v-model.number="inputValue" />
		<div>{{ typeof inputValue }}</div> -->

		<input type="text" v-model.trim="inputValue" />
		{{ inputValue }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);

		return { inputValue };
	},
};
</script>

<style lang="scss" scoped></style>
