<template>
	<div class="card">
		<!-- <div class="card-header">
			<slot name="header" header-messag="헤더 메시지">#header</slot>
		</div> -->

		<!-- header를 사용하기 싫을 때 -->
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-messag="헤더 메시지">#header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-messag="childMessag" :hello-messag="helloMessag">#body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer" footer-messag="푸터 메시지">#footer</slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessag = ref('자식 컴포넌트 입니다');
		const helloMessag = ref('헬로우 메세지');

		// context.slots
		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessag,
			helloMessag,
			hasFooter,
		};
	},
};
</script>

<style scoped></style>
