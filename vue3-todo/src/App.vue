<template>
    <div>
        <TodoHeader />
        <!-- <TodoInput @하위컴포넌트 이벤트 이름="상위컴포넌트의 메서드 이름" /> -->
        <TodoInput @add="addTodoItem" />
        <!-- <TodoList :프롭스 이름="상위 컴포넌트의 데이터 이름" /> -->
        <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
    </div>
</template>

<script>
/* eslint-disable */ 
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import { ref } from 'vue';

export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
    },
    setup() {
        // data
        const todoItems = ref([]);

        // methods
        function fetchTodos() {
            const result = [];

            for (let i = 0; i < localStorage.length; i++) {
                const todoItem = localStorage.key(i);
                // items.value.push(todoItem);
                result.push(todoItem);
            }

            return result;
        }

        todoItems.value = fetchTodos();

        const addTodoItem = (todo) => {
            todoItems.value.push(todo);
            localStorage.setItem(todo, todo);
        }

        const removeTodoItem = (item, index) => {
            todoItems.value.splice(index, 1);
            localStorage.removeItem(item);
        }

        return { todoItems, addTodoItem, removeTodoItem }
    }
}
</script>

<style lang="sass" scoped>

</style>