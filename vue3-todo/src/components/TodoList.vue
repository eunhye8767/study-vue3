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

        return { removeTodo }
    }
}
</script>

<style lang="scss" scoped>

</style>