<template>
    <div>
        <h1>{{ appTitle }}</h1>
        <h3>{{ newTitle }}</h3>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    props: ["appTitle"],
    setup(props) {
        const newTitle = computed(() => {
            return props.appTitle + "!!";
        });
        return { newTitle };
    },
};
</script>

<style lang="scss" scoped></style>
