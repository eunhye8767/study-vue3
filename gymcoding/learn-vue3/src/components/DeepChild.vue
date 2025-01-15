<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMessage : {{ staticMessage }}</p>
			<p>message : {{ message }}</p>
			<p>count : {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const staticMessage = inject('static-message', 'default message');
		// const message = inject('message');
		const { message, updateMessage } = inject('message');
		const count = inject('count');

		updateMessage('!');

		// provide에서 데이터를 보낼 때, readonly로 보냈기 때문에 수정이 불가함.
		message.value = message.value + '!!!!';

		return {
			staticMessage,
			message,
			count,
		};
	},
};
</script>

<style lang="scss" scoped></style>
