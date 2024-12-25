<template>
	<h2>{{ teacher.name }}</h2>
	<h3>강의가 있습니까?</h3>
	<!-- <p>{{ teacher.lectures.length > 0 ? '있음 😄' : '없음 🥲' }}</p> -->
	<p>{{ hasLecture }}</p>
	<p>{{ existLecture() }}</p>
	<button @:click="counter++">Counter: {{ counter }}</button>
	<hr />
	<h3>이름 :</h3>
	<p>{{ fullName }}</p>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// computed
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음 😄' : '없음 🥲';
		});
		// 한 줄만 있을 땐, return을 제거하고 아래와 같이 사용.
		// const hasLecture = computed(() =>
		// 	teacher.lectures.length > 0 ? '있음 😄' : '없음 🥲',
		// );

		// method
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음 😄' : '없음 🥲';
		};

		// 같은 값을 보여줄지라도
		// computed가 method(메서드)보다 비용 부분에서 적게 든다.
		// computed => 브라우저 캐시에 저장이 된다.

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(newValue) {
				[firstName.value, lastName.value] = newValue.split(' ');
			},
		});

		fullName.value = '이 은혜';
		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			firstName,
			lastName,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
