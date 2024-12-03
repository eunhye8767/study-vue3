import { ref } from "vue";

const useMessage = () => {
    const message = ref("hello");

    // methods
    const changeMessage = () => {
        message.value = "hi";
    };

    return { message, changeMessage };
};

export { useMessage };
