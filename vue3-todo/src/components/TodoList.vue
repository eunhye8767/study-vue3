<template>
    <ul>
        <li v-for="(item, index) in todoItems" :key="index">
            <span>{{ item }}</span>
            <button @click="removeTodo(item, index)">삭제</button>
        </li>
    </ul>
</template>

<script>
/* eslint-disable */
import { watch} from 'vue';

export default {
    props: ['todoItems'],
    // setup(props, context) {
    // context 경우, {}처럼 사용하는 부분은 디스트럭처링(구조분해할당) 가능
    // 단, props는 불가. 무조건! props로 사용.
    setup(props, {emit}) {
        const removeTodo = (item, index) => {
            // context.emit('remove', item, index)
            emit('remove', item, index)
        }

        // todoItems 값이 바뀔 때마다 실행
        // 사용이 많을 수록 유지보수에선 데이터 관리가 어렵다.
        // 지양하는 것이 최대 방법이다.
        watch(props.todoItems, (newValue) => {
            console.log(newValue);
        })

        return { removeTodo }
    }
}
</script>

<style lang="scss" scoped>

</style>