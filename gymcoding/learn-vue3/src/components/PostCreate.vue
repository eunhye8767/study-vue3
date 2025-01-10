<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>

		<!-- [방법 1] $emit 자체 속성을 사용할 수 있다 -->
		<!-- <button class="btn btn-primary" @click="$emit('createPost')">Button</button> -->

		<!-- 
        [방법 2] setup(props, context)에서 context.emit을 사용할 수 있다. 
                  ㄴ setup(props, {emit})
     -->
		<!-- <button class="btn btn-primary" @click="createPost">Button</button> -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],
	emits: {
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},
	// 코드를 좀 더 줄이고 싶다면, context 를 {emit}로 변경.
	// setup(props, context) {
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};

			// context.emit('createPost', 1, 2, 3, '김길동');
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return {
			createPost,
			type,
			title,
		};
	},
};
</script>

<style lang="scss" scoped></style>
