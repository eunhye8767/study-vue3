<template>
	<div class="container py-4">
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible" />
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import {
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onMounted,
	onUnmounted,
	onUpdated,
	ref,
} from 'vue';

import LifecycleChild from '@/components/LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		const message = ref('');
		const visible = ref(false);

		console.log('setup');

		// onBeforeMount(() => {
		// 	console.log('onBeforeMount');
		// });

		// onMounted(() => {
		// 	// 컴포넌트 Dom에 접근
		// 	console.log('onMounted');
		// });

		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate');
		// 	console.log(
		// 		'Dom content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		// onUpdated(() => {
		// 	console.log('onUpdated');
		// 	console.log(
		// 		'Dom content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('onUnmounted');
		});

		return {
			message,
			visible,
		};
	},

	/*
   * Vue 3 에서는 setup() {} 에서 사용.
   *
    beforeCreate() {
      console.log('beforeCreate');
    },
	  created() {
		  console.log('created');
	  },
   */
};
</script>

<style lang="scss" scoped></style>
