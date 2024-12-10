<template>
    <div>
        <TodoHeader :appTitle="title" />
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
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';

export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
    },
    data() {
        return {
            title: '할일 앱',
        }
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

        // 라이프 사이클 API와 같은 동작 - beforeCreate, created
        console.log("1: setup called");

        // 라이프 사이클 API
        onBeforeMount(() => {
            console.log("2: onBeforeMount called");
            todoItems.value = fetchTodos();
        })

        onMounted(() => {
            console.log("3: onMounted called");
        })

        // 라이프 사이클 API - 컴포넌트를 지워야 실행(제거)
        onUnmounted(() => {
            console.log("4: onUnmounted called");
        })

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