<template>
	<div class="container py-4">
		{{ msg }}
		<hr />
		{{ message }}
		<input type="text" v-model="message" />
		<hr />
		<button @click="sayHello">click</button>
		<hr />
		<PostItem type="news" title="제목" contents="내용" is-like="true" />
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="paraent-class" />
	</div>
</template>

<script setup>
import { ref } from 'vue';

import axios from 'axios';

import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

const msg = 'Hello World!';
const message = ref('');
const sayHello = () => {
	alert('SayHello');
};

const child = ref(null);

defineExpose({ msg });

const response = await axios('https://jsonplaceholder.typicode.com/posts');
console.log('response :', response);
</script>

<style lang="scss" scoped></style>
