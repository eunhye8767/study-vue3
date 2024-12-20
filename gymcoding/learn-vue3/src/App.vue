<template>
	<div>
		<p>문자열: {{ message }}</p>
		<h3>보간법</h3>
		<!-- v-once : 데이터가 변경되어 갱신(반응)되지 않는 일회성 보간을 수행 -->
		<p v-once>문자열: {{ message }}</p>
		<button @click="btnOnce">변경</button>
	</div>
	<hr />
	<h3>v-html</h3>
	<!-- v-html: html을 그대로 출력 -->
	<p>{{ rawHtml }}</p>
	<p v-html="rawHtml"></p>
	<hr />
	<h3>속성 바인딩</h3>
	<div title="안녕하세요">마우스를 올려보세요.</div>
	<div v-bind:title="dynamicTitle">여기에 올려보세요오!!</div>
	<input type="text" value="이은혜" :disabled="isInputDisabled" />
	<br />
	<br />
	<input v-bind="attrs" />
	<br />
	<br />
	<h3>JAVASCRIPT</h3>
	{{ message.split('').reverse() }}
	<br />
	{{ isInputDisabled ? '예' : '아니오' }}
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		const btnOnce = () => {
			message.value = `${message.value}!`;
		};

		const rawHtml = ref('<strong>안녕하세요옹!</strong>');

		const dynamicTitle = ref('다이나믹 타이틀');
		const isInputDisabled = ref(true);

		const attrs = ref({
			type: 'password',
			value: '1234',
			disabled: false,
		});
		return { message, btnOnce, rawHtml, dynamicTitle, isInputDisabled, attrs };
	},
};
</script>

<style lang="scss" scoped></style>
