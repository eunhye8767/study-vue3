<template>
	<!-- 부모 속성의 값을 나타낼 수 있다 === $parent -->
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello ~!');
const sayHello = () => {
	alert(message.value);
};

defineExpose({
	message,
	sayHello,
});
</script>

<style lang="scss" scoped></style>
