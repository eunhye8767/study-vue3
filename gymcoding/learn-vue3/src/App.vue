<template>
	<div>
		<!-- <form action="" @submit.prevent="save(title, contents)">
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>저장</button>
		</form> -->
		<form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		// watchEffect == 최초로 즉시 실행.
		watchEffect(() => {
			// console.log(title.value);
			// console.log(contents.value);
			save(title.value, contents.value);
		});

		return {
			title,
			contents,
			save,
		};
	},
};
</script>

<style lang="scss" scoped></style>
