import { ref } from "vue";

function useTodo() {
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
    // console.log("1: setup called");

    const addTodoItem = (todo) => {
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
    }

    return { todoItems, fetchTodos, addTodoItem }
}

export { useTodo }