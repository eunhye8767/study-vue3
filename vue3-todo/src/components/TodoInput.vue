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
    setup(props, context) {
        const todoInput = ref('');

        function addTodo() {
            const todo = todoInput.value;
            context.emit('add', todo);
            clearTodo();
        }

        const clearTodo = () => todoInput.value = '';

        return { todoInput, addTodo }
    }
}
</script>

<style lang="scss" scoped>

</style>