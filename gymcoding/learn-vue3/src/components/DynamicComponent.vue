<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanna)">
			바나나
		</button>
		<hr />
		<component :is="currentComp" />
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';

import DynamicApple from '@/components/DynamicApple.vue';
import DynamicBanna from '@/components/DynamicBanna.vue';

// 값 자체가 바뀌었을 때는 shallowRef
/**
 * const obj = shallowRef({name: "홍길동"})
 * 홍길동 => 이길동 처럼 변경해도 반응없지만
 * {name: "홍길동"} => {year: 10} 으로 하면 반응성.
 */
const currentComp = shallowRef(DynamicApple);

const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '이길동' });

const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
