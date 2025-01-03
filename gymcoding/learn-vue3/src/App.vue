<template>
	<div>
		<h2>Input Value</h2>
		<input type="text" v-model="inputValue" />
		<!-- :value="inputValue"
			@input="event => (inputValue = event.target.value)" 
      ==> 이렇게ㅔ value, @input 이벤트를 동시에 제공하는 "양반향 바인딩"
     -->
		<div>{{ inputValue }}</div>
		<hr />
		<h2>textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<hr />
		<h2>input checkbox</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<hr />
		<h2>checkbox values</h2>
		<label>
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValues"
				value="html"
			/>
			html
		</label>
		<label>
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValues"
				value="css"
			/>
			css
		</label>
		<label>
			<input
				type="checkbox"
				id="checkbox"
				v-model="checkboxValues"
				value="javascript"
			/>
			javascript
		</label>
		<div>{{ checkboxValues }}</div>
		<hr />
		<h2>input radio</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>선택한 혈액형 : {{ radioValue }}형</div>
		<hr />
		<h2>Select Value</h2>
		<select v-model="selectValue">
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
		// const checkboxValue = ref(false);
		const checkboxValue = ref('No');
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
