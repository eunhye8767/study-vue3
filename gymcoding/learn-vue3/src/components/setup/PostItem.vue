<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news, notice -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: {
		type: String,
		// 속성 값이 비어있거나 undefined일 경우, 기본값을 적용해준다.
		default: 'news',
		validator: value => ['news', 'notice'].includes(value),
	},
	title: {
		type: String,
		required: true, // 필수
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
	},
	obj: {
		type: Object,
		default: () => {},
	},
});

const emit = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => emit('toggleLike');
</script>

<style scoped></style>
