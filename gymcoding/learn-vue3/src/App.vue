<template>
	<div>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<p v-pre>{{ 이곳은 컴파일 되지 않습니다. }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕</strong>');
		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
