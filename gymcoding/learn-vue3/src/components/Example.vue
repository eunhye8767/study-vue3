<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello" />
			<LabelInput label="이름" data-id="id 입니다." />
			<hr />
			<FancyButton>Click!!<span style="color: red">메롱메롱</span></FancyButton>
			<!-- <FancyButton v-slot="{ fancyMsg }">{{ fancyMsg }}</FancyButton> -->
			<FancyButton>
				<template v-slot="{ fancyMsg }">{{ fancyMsg }}</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- <template v-slot:header>제목입니다</template> -->
				<!-- <template v-slot:default>내용입니다</template> -->
				<!-- <template v-slot:footer>푸터입니다</template> -->

				<!-- <template #header>제목입니다</template> -->
				<!-- <template #default>내용입니다</template> -->
				<!-- 암시적으로 Default 슬롯입니다! -->
				<!-- <template #footer>푸터입니다</template> -->

				<!-- <template #[slotArgs]="{ headerMessag }"
					>제목입니다 {{ headerMessag }}</template
				> -->
				<!-- <template #default="slotProps"> -->
				<template #default="{ childMessag, helloMessag }">
					<!-- {{ slotProps.childMessag }} -->
					{{ childMessag }}
					<br />
					{{ helloMessag }}
				</template>

				<!-- <template #footer="{ footerMessag }">{{ footerMessag }}</template> -->
			</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요');
		};

		const slotArgs = ref('header');
		return { sayHello, slotArgs };
	},
};
</script>

<style scoped></style>
