<template>
	<buntton class="fancy-btn">
		<slot fancy-msg="fancyMsg">Default Click!</slot>
	</buntton>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const fancyMsg = ref('Fancy Message');
		return {
			fancyMsg,
		};
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
