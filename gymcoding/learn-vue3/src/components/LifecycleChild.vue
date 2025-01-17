<template>
	<div class="card">
		<div class="card-body">LifecycleChild</div>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		// console.log('[Child] setup');

		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});

		onMounted(() => {
			// 컴포넌트 Dom에 접근
			console.log('[Child] onMounted');
		});

		onBeforeUnmount(() => {
			console.log('[child] onBeforeUnmount');
		});

		onUnmounted(() => {
			console.log('[child] onUnmounted');
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
