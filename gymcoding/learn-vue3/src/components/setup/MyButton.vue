<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" :="$attrs">
			MyButton {{ message }}
		</button>
		<!-- <button type="button" class="btn btn-primary" @click="sayHello">
			MyButton
		</button> -->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
