<template>
	<div>
		<TheNav />
		<TheView />
	</div>
</template>

<script>
import { ref, useCssModule } from 'vue';
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		// const style = useCssModule();
		// console.log('style', style);
		const color = ref('red');
		color.value = 'purple';
		return { color };
	},
};
</script>

<!-- <style lang="scss" scoped></style> -->
<style>
.red {
	color: v-bind(color);
}
</style>
