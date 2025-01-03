<template>
	<div>
		<h2>Input Value</h2>
		<!-- <input type="text" v-model="inputValue" /> -->
		<input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/>
		<div>{{ inputValue }}</div>
		<hr />
		<h2>textarea value</h2>
		<!-- <textarea v-model="textareaValue"></textarea> -->
		<textarea
			:value="textareaValue"
			@input="event => (textareaValue = event.target.value)"
		></textarea>
		<div>{{ textareaValue }}</div>
		<hr />
		<h2>input checkbox</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input type="checkbox" id="checkbox" v-model="checkboxValue" /> -->
		<input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)"
		/>
		<hr />
		<h2>input radio</h2>
		<label>
			<!-- <input type="radio" name="type" value="O" v-model="radioValue" /> -->
			<input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label>
			<!-- <input type="radio" name="type" value="A" v-model="radioValue" /> -->
			<input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label>
		<div>선택한 혈액형 : {{ radioValue }}형</div>
		<hr />
		<h2>Select Value</h2>
		<!-- <select v-model="selectValue"> -->
		<select
			:value="selectValue"
			@change="event => (selectValue = event.target.value)"
		>
			<option value="html">html</option>
			<option value="javascript">javascript</option>
			<option value="css">css</option>
		</select>
		<div>선택한 강좌 : {{ selectValue }} 입니다.</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref(false);
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
