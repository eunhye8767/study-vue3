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
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { useTodo } from "./hooks/useTodo";

import { onBeforeMount } from "vue";
export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
    },
    data() {
        return {
            title: "할일 앱",
        };
    },
    setup() {
        const { todoItems, fetchTodos, addTodoItem } = useTodo();

        const removeTodoItem = (item, index) => {
            todoItems.value.splice(index, 1);
            localStorage.removeItem(item);
        };

        // 라이프 사이클 API
        onBeforeMount(() => {
            // console.log("2: onBeforeMount called");
            todoItems.value = fetchTodos();
        });

        return { todoItems, addTodoItem, removeTodoItem };
    },
};
</script>

<style lang="sass" scoped></style>
