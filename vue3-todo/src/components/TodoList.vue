<template>
    <ul>
        <li v-for="(item, index) in todoItems" :key="index">{{ item }}</li>
    </ul>
</template>

<script>
import { ref } from 'vue';

/* eslint-disable */
export default {
    props: ['todoItems'],
    setup() {
        const items = ref([]);

        // function fetchTodos() {
        //     for (let i = 0; i < localStorage.length; i++) {
        //         const todoItem = localStorage.key(i);
        //         items.value.push(todoItem);
        //     }
        // }

        return { items }
    }
}
</script>

<style lang="scss" scoped>

</style>