<template>
    <div>
        <input type="text" v-model="todoInput" />
        <button @click="addTodo">추가</button>
    </div>
</template>

<script>
/* eslint-disable */
import { ref } from 'vue';

export default {
    setup() {
        const todoInput = ref('');

        function addTodo() {
            const todo = todoInput.value;
            localStorage.setItem(todo, todo);
        }

        return { todoInput, addTodo }
    }
}
</script>

<style lang="scss" scoped>

</style>