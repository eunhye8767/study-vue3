<template>
	<div class="text" :class="classObject">텍스트 입니다.</div>
	<div
		class="text"
		:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
	>
		텍스트 222
	</div>
	<button v-on:click="toggle">toggle</button>
	<button v-on:click="hasError = !hasError">toggleError</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': false,
		// });

		const classObject = computed(() => {
			return {
				active: isActive.value & true,
				'text-danger': hasError.value && true,
				'text-blue': true,
			};
		});

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		const activeClass = ref('active');
		const errorClass = ref('error');
		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-blue {
	color: blue;
}
.text-danger {
	color: red;
}
</style>
